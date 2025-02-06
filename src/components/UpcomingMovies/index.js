import {useContext, useEffect, useState} from 'react'
import {MovieContext} from '../../context/MovieContext'
import MovieList from '../MovieList'
import Pagination from '../Pagination'
import LoadingView from '../LoadingView'
import './index.css'

const UpcomingMovies = () => {
  const {data, loading, fetchMovies} = useContext(MovieContext)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchMovies('upcoming', currentPage) // Fetch popular movies when component mounts
  }, [currentPage]) // eslint-disable-line react-hooks/exhaustive-deps

  // if (loading) return <p className="upcoming-loading">Loading...</p>
  if (loading) return <LoadingView />

  // console.log({data})

  return (
    <div className="upcoming-container">
      <h1 className="upcoming-heading">Upcoming</h1>
      {data.length > 0 ? (
        <MovieList movieData={data} />
      ) : (
        <p className="upcoming-no-movies">No movies available.</p>
      )}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default UpcomingMovies
