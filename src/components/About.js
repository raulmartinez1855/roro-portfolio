import React, { Component } from 'react'
import Resume from '../assets/images/Raul_Martinez_11_5_2020.pdf'

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2 className="section-title">About Me</h2>
        <p>
          Hello, I am Raul. Thank you for coming to my page. I am a developer
          out of Miami, FL. Currently, I work as a Software Developer for
          Tracfone Wireless.
        </p>

        <p>
          I began coding fulltime when I joined the Wyncode Academy in their
          19th cohort, on September 19th, 2017. I am very thankful to be in the
          development field because I am able to work in what I am passionate
          about. It allows me endless creativity, and I make a difference by
          solving problems. The best part is that I will never know everything
          their is to know about development, so I can always improve.
        </p>
        <p>
          If you would like to know more about my professional background, here
          is a copy of my resume:
        </p>
        <a className="resume" download href={Resume}>
          <span>Resume</span>
        </a>
      </div>
    )
  }
}

export default About
