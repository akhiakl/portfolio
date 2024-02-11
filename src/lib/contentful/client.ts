import * as contentful from 'contentful'

const config: contentful.CreateClientParams = {
    space: process.env.CONTENTFUL_SPACE ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
    environment: process.env.CONTENTFUL_ENVIRONMENT ?? '',
}
const client = contentful.createClient(config);

export default client.withoutUnresolvableLinks