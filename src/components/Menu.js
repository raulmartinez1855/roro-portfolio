import React, { Component } from 'react'
import Dropdown from './Dropdown'
import HamburgerButton from './HamburgerButton'
import Link from 'gatsby-link'

import '../assets/sass/index.scss'

class Menu extends Component {
  state = { open: false }

  isOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open }
    })
  }

  closeNav = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div ref={ele => (this.menuDiv = ele)} className="menu-component">
        <h1>
          <Link to="/">RAUL</Link>
        </h1>
        <HamburgerButton open={this.state.open} click={this.isOpen} />
        <Dropdown
          positions={this.props.positions}
          scroll={this.handleClick}
          open={this.state.open}
          close={this.closeNav}
        />
        <ul className="menu-component__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link name="projectsRef" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
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
}

export default Menu
