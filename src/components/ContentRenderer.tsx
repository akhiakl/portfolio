import React from 'react'
import Hero from './Hero'
import type { PageContents } from '@/types'

type ContentRendererProps = {
    contents?: PageContents
}


type ContentProps = {
    content: PageContents[number]
}


const Content = ({ content }: ContentProps) => {
    switch (content?.__typename) {
        case 'Profile':
            return <Hero profile={content} />

        default:
            return null;
    }
}
function hasSys(
    item: PageContents[number]
): item is Exclude<PageContents[number], null> & { sys: { id: string } } {
    return !!item && 'sys' in item && !!item.sys?.id;
}

const ContentRenderer = ({ contents }: ContentRendererProps) => {
    return contents?.map((content, index) => {
        if (!hasSys(content)) return null;

        return (
            <Content
                key={`${content.sys.id}_${index}`}
                content={content}
            />
        );
    })
}

export default ContentRenderer