import React from 'react'
import Link from 'gatsby-link'

const Dropdown = props => {
  const classes = props.open ? 'dropdown-menu show' : 'dropdown-menu'

  const handleClick = () => {
    props.close()
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
          <Link name="projectsRef" onClick={handleClick} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={props.close} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <a
            href="https://www.codewars.com/users/Raul_/"
            style={{ display: 'flex' }}
          >
            <img
              alt="Codewars profile badge"
              src="https://www.codewars.com/users/Raul_/badges/micro"
              height="19"
            />
          </a>
        </li>
        <li>
          <a href="https://dev.to/raulmartinez" style={{ display: 'flex' }}>
            <img
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="Raul Martinez's DEV Profile"
              style={{
                display: 'flex',
                background:
                  'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 90%, rgba(0,0,0,1) 90%)',
                height: 25,
                width: 25,
              }}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
