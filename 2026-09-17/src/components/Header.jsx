import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="topbar">
      <NavLink className="logo" to="/">Task Tracker</NavLink>
      <nav>
        <NavLink to="/">Avaleht</NavLink>
        <NavLink to="/tasks">Ülesanded</NavLink>
      </nav>
    </header>
  )
}
