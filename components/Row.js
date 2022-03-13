import { useState, useEffect } from 'react'
import styles from '../styles/Row.module.css'

export default function Row({ title, fetchRequest, isLargeRow = false }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetchRequest()
      setMovies(results)
    }

    fetchData()
  }, [fetchRequest])

  return (
    <div className={styles.row}>
      <h2 className={styles.row__title}>{title}</h2>
      <div className={styles.row__posters}>
        {movies.map((movie) => (
          (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img className={`${styles.row__poster} ${isLargeRow ? styles.row__posterLarge : ''}`} key={movie.id} src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} alt={movie?.name} />
        ))}
      </div>
    </div>
  )
}
