import { FragmentType, useFragment } from "@/generated/graphql";
import {
    ContactInfoFragment,
    ExperienceFragment,
    ProfileFragment,
    SkillFragment,
} from "@/service/contentful/fragments";
import type { Page, PageContent, PageContentType } from "@/types";
import type { WithContext, Person } from "schema-dts";
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export const getPageContents = (
    page: Page
): { [K in PageContentType]?: PageContent<K> } => {
    const contents = {} as { [K in PageContentType]?: PageContent<K> };
    page.contentCollection?.items?.forEach((item) => {
        if (item?.__typename) {
            contents[item.__typename] = item;
        }
    });
    return contents;
};

export const getPersonJsonLd = (
    profileFragment?: FragmentType<typeof ProfileFragment>,
    contactInfoFragment?: FragmentType<typeof ContactInfoFragment>,
    experienceFragment?: FragmentType<typeof ExperienceFragment>
): WithContext<Person> => {
    const profile = useFragment(ProfileFragment, profileFragment);
    const contact = useFragment(ContactInfoFragment, contactInfoFragment);
    const experience = useFragment(ExperienceFragment, experienceFragment);
    const skills = experience?.skillsUsedCollection?.items?.map((item) => useFragment(SkillFragment, item)?.name ?? "").filter(Boolean);
    const profileLinks = profile?.profileLinksCollection?.items
        ?.map((item) => item?.url ?? "")
        .filter(Boolean)
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile?.name!,
        jobTitle: profile?.title!,
        url:
            process.env.NEXT_PUBLIC_SITE_URL ||
            process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
        sameAs: profileLinks?.length ? profileLinks : undefined,
        email: contact?.email!,
        worksFor: experience?.company ? {
            "@type": "Organization",
            name: experience?.company!,
            description: experience?.description?.json ? documentToPlainTextString(experience?.description?.json) : "",
            skills: skills?.length ? skills : undefined,
        } : undefined,
        knowsAbout: skills?.length ? skills : undefined,
    };
};
