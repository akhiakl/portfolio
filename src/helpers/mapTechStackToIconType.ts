import { IconType, ContentProjectTechStack } from "@/types"

const iconMap: Record<ContentProjectTechStack, string> = {
    Angular: 'angularjs-plain',
    Bootstrap: 'bootstrap-plain',
    CSS: 'css3-plain',
    Html: 'html5-plain-wordmark',
    React: 'react-plain',
    Sass: 'sass-plain',
    Typescript: 'typescript-plain',
    Wordpress: 'wordpress-plain'
}
const mapContentTechStackToIconType = (techStack: ContentProjectTechStack): IconType => ({
    type: 'devicon',
    icon: iconMap[techStack]
})

export default mapContentTechStackToIconType