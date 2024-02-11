import { IconType } from "./common"

export type PortfolioProject = {
    id: string
    index: string
    title: string | string[]
    image: {
        url?: string
        width?: number
        height?: number
    }
    description?: string
    stackIcons?: IconType[]
    link?: string
}
