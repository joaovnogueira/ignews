import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'

export default function Posts() {
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
        Prismic.predicates.at('document.type', 'Publication')
    ], {
        fetch: ['publication.tile', 'publication.content'],
        pageSize: 100,
    })

    console.log(response)

    return {
        props: {

        }
    }
}