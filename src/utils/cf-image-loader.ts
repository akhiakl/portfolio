'use client'

import { ImageLoader } from "next/image"

export const cfImageLoader: ImageLoader = ({ src, width, quality }) => {
    const imageUrl = src.startsWith('//') ? `https:${src}` : src
    return `${imageUrl}?w=${width}&q=${quality || 75}&fm=webp`
}
