import { revalidateTag } from "next/cache"
import { CONTENTFUL_TAG } from "@/lib/cms/config"

// Target of a Contentful webhook (publish/unpublish) with header `x-revalidate-secret`.
export async function POST(request: Request) {
  const expected = process.env.CONTENTFUL_REVALIDATE_SECRET
  if (!expected || request.headers.get("x-revalidate-secret") !== expected) {
    return Response.json({ revalidated: false, message: "Invalid secret" }, { status: 401 })
  }
  // Expire immediately so the next visit renders the newly published content.
  revalidateTag(CONTENTFUL_TAG, { expire: 0 })
  return Response.json({ revalidated: true, now: Date.now() })
}
