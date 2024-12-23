import './index.css'
import MovieCard from '../MovieCard'

const MovieList = ({movieData}) => (
  <ul className="movie-list">
    {movieData.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </ul>
)

export default MovieList
