import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head> 

            <main className={styles.container}>
                <div className="">
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