import React from 'react'
import type { Thing, WithContext } from 'schema-dts'

type Props = {
    content: WithContext<Thing>
}

const JsonLd = ({ content }: Props) => {
    return <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(content).replace(/</g, '\\u003c'),
        }}
    />
}

export default JsonLd