import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <nav className='container'>
        <h2 className="display-2 py-4">Todos</h2>
        <ul className="nav">
          <li className='nav-item'><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link" to="/todos">Todos</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link" to="/about">About</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;