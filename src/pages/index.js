import React, { Component } from 'react'
import About from '../components/About'
import Menu from '../components/Menu'
// import Projects from '../components/Projects'

class IndexPage extends Component {
  state = {
    positions: {},
  }

  scroll = ref => {
    window.scrollTo({
      top: ref - 70,
      behavior: 'smooth',
    })
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
            <img src="/static/Optimized-MartinezRaul.jpg" alt="" />
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
