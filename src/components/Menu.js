import React, { Component } from 'react'
import Dropdown from './Dropdown'
import HamburgerButton from './HamburgerButton'
import Link from 'gatsby-link'

import '../assets/sass/index.scss'

class Menu extends Component {
  state = { open: false }

  componentDidMount() {
    console.log(this.menuDiv)
    this.applySticky()
  }

  isOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open }
    })
  }

  closeNav = () => {
    this.setState({ open: false })
  }

  applySticky = () => {
    window.addEventListener('scroll', () => {
      const nav = this.menuDiv
      const sticky = nav.offsetTop
      const isPageDown = window.pageYOffset >= sticky
      isPageDown ? nav.classList.add('sticky') : null
    })
  }

  render() {
    // let dropDown = <Dropdown close={this.closeNav} />
    return (
      <div ref={ele => (this.menuDiv = ele)} className="menu-component">
        <h1>
          <Link to="/">RAUL</Link>
        </h1>
        <HamburgerButton open={this.state.open} click={this.isOpen} />
        <Dropdown open={this.state.open} close={this.closeNav} />
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
