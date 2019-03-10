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
        </ul>
      </div>
    )
  }
}

export default Menu
