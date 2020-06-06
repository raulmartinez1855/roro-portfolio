import React, { Component } from 'react'
import GitHub from '../assets/images/GitHub-Mark-Light-32px.png'
import LinkedIn from '../assets/images/linkedin.png'
import Plane from '../assets/images/plane.svg'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h2>Let's get in touch:</h2>
        <div className="images-container">
          <button>
            <a href="https://github.com/raulmartinez1855">
              <img src={GitHub} alt="Raul's Github" />
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/raulmartinez1/">
              <img src={LinkedIn} alt="Raul's LinkedIn" id="size-fix" />
            </a>
          </button>
          <button>
            <a href="mailto:raulmartinez1855@gmail.com">
              <img src={Plane} alt="Send an email to Raul" id="color-fix" />
            </a>
          </button>
        </div>
      </div>
    )
  }
}
