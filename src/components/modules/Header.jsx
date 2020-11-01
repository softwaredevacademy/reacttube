// React core
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  // State
  const color = props.hasLightTheme ? 'light' : 'dark'
  const [query, setQuery] = useState('')

  // Render
  return (
    <header className={'Header ' + color}>
      <Link to='/'>
        <img src={require(`../../assets/images/logo/logo-${color}.svg`)} alt='Logo' />
      </Link>

      <div className="search-bar">
        <input placeholder='Search' value={query} onChange={event => setQuery(event.target.value)} />
        <Link to={'/results/' + query}>Search</Link>
      </div>
    </header >
  )
}