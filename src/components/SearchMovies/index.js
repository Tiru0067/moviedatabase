import {useContext, useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {MovieContext} from '../../context/MovieContext'
import MovieList from '../MovieList'
import Pagination from '../Pagination'
import './index.css'

const SearchMovies = () => {
  const {data, loading, fetchMovies} = useContext(MovieContext)
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation()

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query') || ''
    if (query) fetchMovies('search', currentPage, query)
  }, [location.search, currentPage]) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <p className="search-loading">Loading...</p>

  // console.log(data)

  return (
    <div className="search-container">
      <h1 className="search-heading">Results</h1>
      {data.length > 0 ? (
        <>
          <MovieList movieData={data} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <p className="search-no-movies">No movies available.</p>
      )}
    </div>
  )
}

export default SearchMovies
