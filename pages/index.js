import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lewitts Wedding</title>
      </Head>

      <main>
        <Header title="Lewitts Wedding 2023" />
        <p className="description">
          Coming soon...
        </p>
      </main>

      <Footer />
    </div>
  )
}
