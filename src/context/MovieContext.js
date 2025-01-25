import {createContext, useState} from 'react'

export const MovieContext = createContext()

export const MovieProvider = ({children}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const API_KEY = '59d0d766640f9c18ce3708eb57d4d122'

  // Fetch movies function
  const fetchMovies = async (category = 'popular', page = 1, query = '') => {
    console.log('page: ', page)
    setLoading(true)
    try {
      let url = ''
      if (category === 'search') {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`
      } else {
        url = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`
      }

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result.results)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <MovieContext.Provider value={{data, loading, fetchMovies}}>
      {children}
    </MovieContext.Provider>
  )
}
