import $api from './index'

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

export const fetchTrending = async () => {
  const { data } = await $api.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
  return data
}

export const fetchNetflixOriginals = async () => {
  const { data } = await $api.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`)
  return data
}

export const fetchTopRated = async () => {
  const { data } = await $api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US`)
  return data
}

export const fetchActionMovies = async () => {
  const { data } = await $api.get(`/discover/movie?api_key=${API_KEY}&with_genres=28`)
  return data
}

export const fetchComedyMovies = async () => {
  const { data } = await $api.get(`/discover/movie?api_key=${API_KEY}&with_genres=35`)
  return data
}

export const fetchHorrorMovies = async () => {
  const { data } = await $api.get(`/discover/movie?api_key=${API_KEY}&with_genres=27`)
  return data
}

export const fetchRomanceMovies = async () => {
  const { data } = await $api.get(`/discover/movie?api_key=${API_KEY}&with_genres=10749`)
  return data
}

export const fetchDocumentaries = async () => {
  const { data } = await $api.get(`/discover/movie?api_key=${API_KEY}&with_genres=99`)
  return data
}
