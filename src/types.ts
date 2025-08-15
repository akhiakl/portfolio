import { PageBySlugQuery } from "./generated/graphql/graphql";
import { FragmentType } from "./generated/graphql";
import { ProfileFragment, ContactInfoFragment } from "./service/contentful/fragments";

export type Page = NonNullable<NonNullable<NonNullable<PageBySlugQuery['pageCollection']>['items'][number]>>;
export type PageContents = NonNullable<Page['contentCollection']>['items'];

export type ContentTypeMap = {
    Profile: FragmentType<typeof ProfileFragment>;
    ContactInfo: FragmentType<typeof ContactInfoFragment>;
    Project: any; // TODO: Add proper fragment type
    Education: any; // TODO: Add proper fragment type
    Experience: any; // TODO: Add proper fragment type
    Skill: any; // TODO: Add proper fragment type
};

export type PageContentType = keyof ContentTypeMap;
export type PageContent<T extends PageContentType> = ContentTypeMap[T];