import React from 'react'
import { FragmentType, useFragment } from '@/generated/graphql'
import { AssetFragment } from '@/service/contentful/fragments'
import Image, { ImageProps } from 'next/image'
import { cfImageLoader } from '@/utils/cf-image-loader'

type ContentfulImageProps = Omit<ImageProps, 'src' | 'alt' | 'loader'> & {
    asset?: FragmentType<typeof AssetFragment>
    alt?: string;
}

const ContentfulImage = ({ asset, alt, width, height, ...props }: ContentfulImageProps) => {
    const image = useFragment(AssetFragment, asset)
    if (!image?.url) return null;

    return (
        <Image
            src={image.url}
            alt={alt || image.title || 'Contentful Image'}
            width={width! ?? image.width}
            height={height! ?? image.height}
            loader={cfImageLoader}
            {...props}
        />
    )
}

export default ContentfulImage