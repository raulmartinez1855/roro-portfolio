import React from 'react'
import Link from 'gatsby-link'

const Dropdown = props => {
  const classes = props.open ? 'dropdown-menu show' : 'dropdown-menu'

  const handleClick = e => {
    props.close()
    props.scroll(e)
  }

  return (
    <div className={classes}>
      <ul>
        <li>
          <Link onClick={props.close} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link name="aboutRef" onClick={handleClick} to="#">
            About
          </Link>
        </li>
        {/* <li>
          <Link name="projectsRef" onClick={handleClick} to="#">
            Projects
          </Link>
        </li> */}
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
