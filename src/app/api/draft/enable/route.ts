import { cookies, draftMode } from "next/headers"
import { redirect } from "next/navigation"
import type { NextRequest } from "next/server"

// Contentful preview URL: https://<site>/api/draft/enable?secret=<CONTENTFUL_PREVIEW_SECRET>&path=/
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const expected = process.env.CONTENTFUL_PREVIEW_SECRET
  if (!expected || searchParams.get("secret") !== expected) {
    return new Response("Invalid preview secret", { status: 401 })
  }

  // Only same-origin relative paths, to avoid an open redirect.
  const path = searchParams.get("path") ?? "/"
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
    return new Response("Invalid path", { status: 400 })
  }

  const draft = await draftMode()
  draft.enable()

  // Contentful renders the preview in a cross-site iframe; the bypass cookie must be SameSite=None to be sent there.
  const cookieStore = await cookies()
  const bypass = cookieStore.get("__prerender_bypass")
  if (bypass) {
    cookieStore.set({
      name: bypass.name,
      value: bypass.value,
      httpOnly: true,
      path: "/",
      secure: true,
      sameSite: "none",
      partitioned: true,
    })
  }

  redirect(path)
}
