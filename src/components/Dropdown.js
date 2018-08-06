import React from 'react'
import Link from 'gatsby-link'

const Dropdown = props => {
  const classes = props.open ? 'dropdown-menu show' : 'dropdown-menu'

  return (
    <div className={classes}>
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
