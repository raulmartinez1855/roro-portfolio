import React, { Component } from 'react'
import Dropdown from './Dropdown'
import HamburgerButton from './HamburgerButton'
import Link from 'gatsby-link'

import '../assets/sass/index.scss'

class Menu extends Component {
  navRef = React.createRef()

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
    let dropDown = <Dropdown close={this.closeNav} />
    return (
      <div className="menu-component">
        <h1>RAUL</h1>
        <HamburgerButton open={this.state.open} click={this.isOpen} />
        {this.state.open ? dropDown : null}
        <ul className="menu-component__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
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
