import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dev dependencies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          build<br>
          darling<br>
          ipython<br>
          pip-tools<br>
          pytest<br>
        </p>
      </main>
    </div>
  )
}
