import client from "@/lib/contentful/client"
import { ContentProductEntrySkeleton, ContentModelId } from "@/types"
import mapContentProjectsToPortfolioProjects from "@/helpers/mapContentProjectsToPortfolioProjects"

export async function GET() {
    const entries = await client.getEntries<ContentProductEntrySkeleton>({
        content_type: ContentModelId.Project,
        select: ['sys.id', 'fields', 'sys.contentType']
    })
    return Response.json({ projects: mapContentProjectsToPortfolioProjects(entries.items) })
}