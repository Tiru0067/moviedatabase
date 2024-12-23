import {createContext, useState} from 'react'
import axios from 'axios'

// Create Context
export const MovieContext = createContext()
export const MovieProvider = ({children}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const API_KEY = '59d0d766640f9c18ce3708eb57d4d122'

  // Fetch movies function using Axios
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

      const response = await axios.get(url)
      setData(response.data.results)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }

  return (
    <MovieContext.Provider value={{data, loading, fetchMovies}}>
      {children}
    </MovieContext.Provider>
  )
}
