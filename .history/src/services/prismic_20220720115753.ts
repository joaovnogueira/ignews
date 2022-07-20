import Prismic from '@prismicio/client'

export function getPrismicClient() {
    const prismic = Prismic.(
        process.env.PRISMIC_ACCESS_TOKEN,
        {
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )
}