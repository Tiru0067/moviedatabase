import {Route, Switch} from 'react-router-dom'
import {MovieProvider} from './context/MovieContext'
import Navbar from './components/Navbar'
import PopularMovies from './components/PopularMovies'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import SearchMovies from './components/SearchMovies'
import MovieDetails from './components/MovieDetails'

import './App.css'

const App = () => (
  <MovieProvider>
    <Navbar />
    <Switch>
      <Route exact path="/" component={PopularMovies} />
      <Route exact path="/top-rated" component={TopRatedMovies} />
      <Route exact path="/upcoming" component={UpcomingMovies} />
      <Route exact path="/search" component={SearchMovies} />
      <Route path="/movie/:movieId" component={MovieDetails} />
    </Switch>
  </MovieProvider>
)

export default App
