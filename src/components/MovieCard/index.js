import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = ({movie}) => {
  const num = parseFloat(movie.vote_average)
  const roundedNum = (Math.round(num * 10) / 10).toFixed(1)
  return (
    <li className="movie-card">
      <img
        className="movie-card-poster"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://dummyimage.com/500x750/000/fff&text=Image+Not+Available'
        }
        alt={movie.title}
      />

      <h1 className="movie-card-title">{movie.title}</h1>
      <p className="movie-card-rating">Rating: {roundedNum}</p>
      <Link to={`/movie/${movie.id}`}>
        <button className="movie-card-view-details" type="button">
          View Details
        </button>
      </Link>
    </li>
  )
}
export default MovieCard
