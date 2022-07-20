import Prismic from '@prismicio/client'

export function getPrismicClient(rq){
    const prismic = Prismic.createClient(
        process.env.PRISMIC_ACCESS_TOKEN,
        {
            req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return prismic;
}