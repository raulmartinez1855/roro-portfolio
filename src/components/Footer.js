import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h2>Let's get in touch:</h2>
        <div className="images-container">
          <button>
            <a href="https://github.com/raulmartinez1855">
              <img src="/static/GitHub-Mark-Light-32px.png" alt="" />
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/raulmartinez1/">
              <img src="/static/linkedin.png" alt="" id="size-fix" />
            </a>
          </button>
          <button>
            <a href="mailto:raulmartinez1855@gmail.com">
              <img src="/static/plane.svg" alt="" id="color-fix" />
            </a>
          </button>
        </div>
      </div>
    )
  }
}
