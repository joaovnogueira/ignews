import * as prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown): Prismic{
    const client = prismic.createClient(
        process.env.PRISMIC_ENDPOINT,
        {
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return client;
}