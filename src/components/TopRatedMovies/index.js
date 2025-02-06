import {useContext, useEffect, useState} from 'react'
import {MovieContext} from '../../context/MovieContext'
import MovieList from '../MovieList'
import Pagination from '../Pagination'
import LoadingView from '../LoadingView'

import './index.css'

const TopRatedMovies = () => {
  const {data, loading, fetchMovies} = useContext(MovieContext)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchMovies('top_rated', currentPage)
  }, [currentPage]) // eslint-disable-line react-hooks/exhaustive-deps

  // if (loading) return <p className="toprated-loading">Loading...</p>
  if (loading) return <LoadingView />

  return (
    <div className="toprated-container">
      <h1 className="toprated-heading">Top Rated</h1>
      {data.length > 0 ? (
        <MovieList movieData={data} />
      ) : (
        <p className="toprated-no-movies">No movies available.</p>
      )}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default TopRatedMovies
