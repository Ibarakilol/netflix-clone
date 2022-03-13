import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="page">
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <Navbar />
      <main className="main">{children}</main>
    </div>
  )
}
