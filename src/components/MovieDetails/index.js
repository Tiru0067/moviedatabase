import {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import './index.css'

const MovieDetails = () => {
  const {movieId} = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  const API_KEY = '59d0d766640f9c18ce3708eb57d4d122'

  // Fetch movie details and cast details
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
        )
        if (!movieResponse.ok) {
          throw new Error(`HTTP error! status: ${movieResponse.status}`)
        }
        const movieData = await movieResponse.json()
        setMovie(movieData)

        const castResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
        )
        if (!castResponse.ok) {
          throw new Error(`HTTP error! status: ${castResponse.status}`)
        }
        const castData = await castResponse.json()
        setCast(castData.cast)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching movie details or cast:', error)
        setLoading(false)
      }
    }

    fetchMovieDetails()
  }, [movieId])

  if (loading) return <p>Loading...</p>

  if (!movie) return <p>Movie not found.</p>

  return (
    <div className="movie-details-container">
      {/* Movie Details Section */}
      <section className="movie-details">
        <div className="movie-details-header">
          <h1 className="movie-details-title">{movie.title}</h1>
          <img
            className="movie-details-poster"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://dummyimage.com/500x750/000/fff&text=Image+Not+Available'
            }
            alt={movie.title}
          />
        </div>
        <div className="movie-info">
          <p>
            <strong>Ratings:</strong> <br />
            {movie.vote_average}
          </p>
          <p>
            <strong>Duration:</strong> <br /> {movie.runtime} min
          </p>
          <p>
            <strong>Genres:</strong> <br />
            {movie.genres.map(genre => genre.name).join(', ')}
          </p>
          <p>
            <strong>Release Date:</strong> <br /> {movie.release_date}
          </p>
          <p>
            <strong>Overview:</strong> <br /> {movie.overview}
          </p>
        </div>
      </section>

      {/* Cast Details Section */}
      <section className="cast-details">
        <h2>Cast</h2>
        <div className="cast-grid">
          {cast.length > 0 ? (
            cast.map(actor => (
              <div key={actor.id} className="cast-card">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : 'https://dummyimage.com/500x750/000/fff&text=Image+Not+Available'
                  }
                  alt={actor.name}
                />
                <p>
                  <strong>{actor.name}</strong>
                </p>
                <p>{actor.character}</p>
              </div>
            ))
          ) : (
            <p>No cast information available.</p>
          )}
        </div>
      </section>

      {/* Back Button */}
      <button
        className="back-button"
        type="button"
        onClick={() => history.goBack()}
      >
        Back to Movies
      </button>
    </div>
  )
}

export default MovieDetails
