import { ContentProductEntry, PortfolioProject } from "@/types"
import mapContentTechStackToIconType from "./mapTechStackToIconType"

const mapContentProjectsToPortfolioProjects = (projectEntrieItems: ContentProductEntry) => projectEntrieItems?.map(({
    fields: {
        description,
        image,
        techStack,
        title,
        url
    }
}, idx): PortfolioProject => ({
    index: (idx + 1).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    }),
    title: title?.split(' '),
    description: description,
    image: {
        url: image?.fields.file?.url,
        height: image?.fields?.file?.details?.image?.height,
        width: image?.fields?.file?.details?.image?.width,
    },
    stackIcons: techStack?.map(mapContentTechStackToIconType),
    link: url
}))

export default mapContentProjectsToPortfolioProjects