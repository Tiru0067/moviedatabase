import {useContext, useEffect, useState} from 'react'
import {MovieContext} from '../../context/MovieContext'
import MovieList from '../MovieList'
import Pagination from '../Pagination'
import './index.css'

const PopularMovies = () => {
  const {data, loading, fetchMovies} = useContext(MovieContext)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    console.log(currentPage)
    fetchMovies('popular', currentPage)
  }, [currentPage]) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <p className="popular-loading">Loading...</p>

  return (
    <div className="popular-container">
      <h1 className="popular-heading">Popular Movies</h1>
      {data.length > 0 ? (
        <>
          <MovieList movieData={data} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <p className="popular-no-movies">No movies available.</p>
      )}
    </div>
  )
}

export default PopularMovies
