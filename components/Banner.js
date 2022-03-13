import { useState, useEffect } from 'react'
import styles from '../styles/Banner.module.css'
import { fetchNetflixOriginals } from '../http/tmdbAPI'

export default function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const { results } = await fetchNetflixOriginals()
      setMovie(results[Math.floor(Math.random() * results.length - 1)])
    }

    fetchMovies()
  }, [])

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  return (
    <header className={styles.banner} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')` }}>
      <div className="wrapper">
        <div className={styles.banner__inner}>
          <h1 className={styles.banner__title}>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className={styles.banner__buttons}>
            <button className={styles.banner__button}>Play</button>
            <button className={styles.banner__button}>My List</button>
          </div>
          <p className={styles.banner__description}>{truncate(movie?.overview, 150)}</p>
        </div>
      </div>
      <div className={styles.banner__fadeBottom} />
    </header>
  )
}
