import React from 'react'
import About from '../components/About'

const IndexPage = () => (
  <div>
    <div className="indexPage">
      <div className="image-container">
        <img src="/static/Optimized-MartinezRaul.jpg" alt="" />
        <div className="dark-container" />
        <h2>Hello! I am Raul. I am a Developer.</h2>
      </div>
    </div>
    <About />
  </div>
)

export default IndexPage
