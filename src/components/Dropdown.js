import React from 'react'
import Link from 'gatsby-link'

const Dropdown = props => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li>
          <Link onClick={props.close} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.close} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={props.close} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={props.close} to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
