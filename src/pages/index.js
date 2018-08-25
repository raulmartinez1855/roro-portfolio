import React, { Component } from 'react'
import About from '../components/About'
import Menu from '../components/Menu'
// import Projects from '../components/Projects'
import MartinezRaul from '../assets/images/Optimized-MartinezRaul.jpg'

class IndexPage extends Component {
  state = {
    positions: {},
  }

  componentDidUpdate() {
    this.scroll()
  }
  scroll = () => {
    const isScroll = window.location.search === '?scroll=about'
    const position = this.state.positions.aboutRef
    if (isScroll) {
      window.scrollTo({
        top: position - 70,
        behavior: 'smooth',
      })
    }
  }

  findPositions = (refName, scrollLength) => {
    const positions = { ...this.state.positions }
    positions[refName] = scrollLength
    this.setState({ positions })
  }

  render() {
    return (
      <div>
        <Menu positions={this.state.positions} scroll={this.scroll} />
        <div className="indexPage">
          <div className="image-container">
            <img src={MartinezRaul} alt="" />
            <div className="dark-container" />
            <h2>Hello! I am Raul. I am a Developer.</h2>
          </div>
        </div>
        <About findPositions={this.findPositions} />
        {/* <Projects findPositions={this.findPositions} /> */}
      </div>
    )
  }
}

export default IndexPage
