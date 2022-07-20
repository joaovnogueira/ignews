import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head> 

            <main>
                <div>
                    <a href="">
                        <time>12 de março de 1999</time>
                        <strong>Boas práticas para devs em início de carreira</strong>
                        
                    </a>
                </div>
            </main> 
        </>
          
    );
}