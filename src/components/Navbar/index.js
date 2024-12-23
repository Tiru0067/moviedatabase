import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {HiMenu, HiX} from 'react-icons/hi'
import './index.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const history = useHistory()

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const handleSearch = e => {
    e.preventDefault()
    if (searchQuery.trim()) {
      history.push(`/search?query=${searchQuery}`)
      // setSearchQuery('')
    }
  }

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>movieDB</h1>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>
          Popular
        </Link>
        <Link
          to="/top-rated"
          className="navbar-link"
          onClick={() => setMenuOpen(false)}
        >
          Top Rated
        </Link>
        <Link
          to="/upcoming"
          className="navbar-link"
          onClick={() => setMenuOpen(false)}
        >
          Upcoming
        </Link>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search movies..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
