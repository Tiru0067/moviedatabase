import {useContext, useEffect} from 'react'
import {MovieContext} from '../../context/MovieContext'
import MovieList from '../MovieList'
import './index.css'

const PopularMovies = () => {
  const {data, loading, fetchMovies} = useContext(MovieContext)

  useEffect(() => {
    fetchMovies('popular') // Fetch popular movies when component mounts
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <p className="popular-loading">Loading...</p>

  // console.log({data})

  return (
    <div className="popular-container">
      <h1 className="popular-heading">Popular</h1>
      {data.length > 0 ? (
        <MovieList movieData={data} />
      ) : (
        <p className="popular-no-movies">No movies available.</p>
      )}
    </div>
  )
}

export default PopularMovies
