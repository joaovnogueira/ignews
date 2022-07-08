import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main>
        <section>
          <span>👏 Hey, welcome</span>`
          <h1>News about the <span>React</span></h1>
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}
