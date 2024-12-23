import {useContext, useEffect} from 'react'
import {MovieContext} from '../../context/MovieContext'
import MovieList from '../MovieList'
import './index.css'

const TopRatedMovies = () => {
  const {data, loading, fetchMovies} = useContext(MovieContext)

  useEffect(() => {
    fetchMovies('top_rated') // Fetch popular movies when component mounts
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <p className="toprated-loading">Loading...</p>

  // console.log({data})

  return (
    <div className="toprated-container">
      <h1 className="toprated-heading">Top Rated</h1>
      {data.length > 0 ? (
        <MovieList movieData={data} />
      ) : (
        <p className="toprated-no-movies">No movies available.</p>
      )}
    </div>
  )
}

export default TopRatedMovies
