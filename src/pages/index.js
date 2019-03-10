import React, { Component } from 'react'
import About from '../components/About'
import Menu from '../components/Menu'
import MartinezRaul from '../assets/images/Optimized-MartinezRaul.jpg'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="indexPage">
          <div className="image-container">
            <img src={MartinezRaul} alt="" />
            <div className="dark-container" />
            <h2>Hello! I am Raul. I am a Developer.</h2>
          </div>
        </div>
        <About />
      </div>
    )
  }
}

export default IndexPage
