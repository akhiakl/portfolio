
import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config'

const baseUrl = process.env.CONTENTFUL_GRAPHQL_BASE_URL || '';
const environment = process.env.CONTENTFUL_ENVIRONMENT || '';
const space = process.env.CONTENTFUL_SPACE || '';
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || '';
const endpoint = `${baseUrl}/content/v1/spaces/${space}/environments/${environment}`;


const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [endpoint]: { headers: { Authorization: `Bearer ${accessToken}` } }
  },
  documents: ['src/service/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    "src/generated/graphql/": {
      preset: 'client',
      config: {
        documentMode: 'string',
        fragmentMasking: false
      }
    },
    'src/generated/graphql/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  }
};

export default config;
