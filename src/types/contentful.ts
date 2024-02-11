import { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful"


export enum ContentModelId {
    Project = 'personalProject'
}

export type ContentProjectTechStack = "Angular" | "Bootstrap" | "CSS" | "Html" | "React" | "Sass" | "Typescript" | "Wordpress"
export type ContentProductEntryFields = {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    url: EntryFieldTypes.Symbol;
    techStack: EntryFieldTypes.Array<EntryFieldTypes.Symbol<ContentProjectTechStack>>;
}
export type ContentProductEntrySkeleton = EntrySkeletonType<ContentProductEntryFields, ContentModelId.Project>
export type ContentProductEntry = Entry<ContentProductEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]