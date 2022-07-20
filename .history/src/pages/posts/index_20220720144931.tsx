import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'
import * as Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

interface PostProps {
    posts: Post[];
}

interface Post{
    slug: string,
    title: string,
    excerpt: string,
    updatedAt: string,
}

export default function Posts({posts}: PostProps) {
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head> 

            <main className={styles.container}>
                <div className={styles.posts}>
                    
                    <a href="">
                        <time>12 de março de 1999</time>
                        <strong>Boas práticas para devs em início de carreira</strong>
                        <p>Hoje devs são peças fundamentais de todo negócio, estão nas startups e nas pequenas e médias empresas que buscam soluções tecnológicas para seus produtos e serviços.</p>
                    </a>
                    <a href="">
                        <time>12 de março de 1999</time>
                        <strong>Boas práticas para devs em início de carreira</strong>
                        <p>Hoje devs são peças fundamentais de todo negócio, estão nas startups e nas pequenas e médias empresas que buscam soluções tecnológicas para seus produtos e serviços.</p>
                    </a>
                    <a href="">
                        <time>12 de março de 1999</time>
                        <strong>Boas práticas para devs em início de carreira</strong>
                        <p>Hoje devs são peças fundamentais de todo negócio, estão nas startups e nas pequenas e médias empresas que buscam soluções tecnológicas para seus produtos e serviços.</p>
                    </a>
                </div>
            </main> 
        </>
          
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
    ], {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100,
    })

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })

        };
    }
    )

    console.log(JSON.stringify(response, null, 2))

    return {
        props: {
            posts
        }
    }
}