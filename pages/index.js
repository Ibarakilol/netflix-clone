import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Row from '../components/Row'
import * as Requests from '../http/tmdbAPI'

export default function Home() {
  const router = useRouter()
  const userLoggedIn = useSelector((state) => state.user.userLoggedIn)

  useEffect(() => {
    if (!userLoggedIn) router.push('/login')
  }, [userLoggedIn])

  return (
    <Layout>
      <Banner />
      <div className={styles.rows}>
        <Row title='NETFLIX ORIGINALS' fetchRequest={Requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchRequest={Requests.fetchTrending} />
        <Row title="Top Rated" fetchRequest={Requests.fetchTopRated} />
        <Row title="Action Movies" fetchRequest={Requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchRequest={Requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchRequest={Requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchRequest={Requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchRequest={Requests.fetchDocumentaries} />
      </div>
    </Layout>
  )
}
