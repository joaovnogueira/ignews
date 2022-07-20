import Prismic from '@prismicio/client'

export function getPrismicClient() {
    const prismic = Prismic.lient(
        process.env.PRISMIC_ACCESS_TOKEN,
        {
            a
        }
    )
}