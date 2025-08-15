import type { TypedDocumentString } from '@/generated/graphql/graphql'
import type { ExecutionResult } from 'graphql'

const baseUrl = process.env.CONTENTFUL_GRAPHQL_BASE_URL || ''
const environment = process.env.CONTENTFUL_ENVIRONMENT || ''
const space = process.env.CONTENTFUL_SPACE || ''
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || ''
const endpoint = `${baseUrl}/content/v1/spaces/${space}/environments/${environment}`

type ExtraConfigs = {
    next?: NextFetchRequestConfig
    cache?: RequestCache
}

export const contentfulClient = {
    async execute<TResult, TVariables extends Record<string, unknown>>(
        query: TypedDocumentString<TResult, TVariables>,
        variables?: TVariables,
        options?: ExtraConfigs
    ) {
        const { next, cache } = options || {}

        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ query, variables }),
            next,
            cache,
        })

        if (!res.ok) throw new Error('Contentful GraphQL query failed')

        const json = (await res.json()) as ExecutionResult<TResult>
        if (json.errors) {
            console.error(JSON.stringify(json.errors))
        }

        return json.data
    }
}
