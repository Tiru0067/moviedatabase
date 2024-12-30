import {createContext, useState} from 'react'

// Create Context
export const MovieContext = createContext()
export const MovieProvider = ({children}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const API_KEY = 'Add You API_KEy'

  // Fetch movies function using Fetch API
  const fetchMovies = async (category = 'popular', query = '') => {
    setLoading(true)
    try {
      let url = ''
      if (category === 'search') {
        // For search category, use the query
        url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
      } else {
        // For other categories like popular, top_rated and upcoming.
        url = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`
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
