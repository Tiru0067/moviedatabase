import {useContext, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {MovieContext} from '../../context/MovieContext'
import MovieList from '../MovieList'
import './index.css'

const SearchMovies = () => {
  const {data, loading, fetchMovies} = useContext(MovieContext)
  const location = useLocation()

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query') || ''
    if (query) {
      fetchMovies('search', query)
    }
  }, [location.search]) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <p className="search-loading">Loading...</p>

  return (
    <div className="search-container">
      <h1 className="search-heading">Results</h1>
      {data.length > 0 ? (
        <MovieList movieData={data} />
      ) : (
        <p className="search-no-movies">No movies available.</p>
      )}
    </div>
  )
}

export default SearchMovies
