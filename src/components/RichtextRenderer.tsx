import React from 'react'
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type RichtextRendererProps = {
    document: Document
}

const RichtextRenderer = ({ document }: RichtextRendererProps) => {
    return (
        documentToReactComponents(document)
    )
}

export default RichtextRenderer