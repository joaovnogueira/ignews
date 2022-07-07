import styles from '../styles/home.module.scss';
import Head from 'next/head'

export default function Home() {
  return (
    <h1 className={styles.title}>
      <Head>
        <title>Inicioig.news</title>
      </Head>
      Hello <span>World</span>
    </h1>   
  )
}
