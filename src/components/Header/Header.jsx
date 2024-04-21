import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link className='text-field' to="/">Home</Link>
        <Link className='text-field' to="/about">About</Link>
    </header>
  )
}

export default Header