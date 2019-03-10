import React, { Component } from 'react'

class Projects extends Component {
  projects = [
    {
      name: 'Timbit Dunker Game',
      description: `'Whack-a-mole but with Tim Horton timbits. This game won 1st place at a hackathon at RBI headquarters(Owners of Tim Hortons, Burger King, and Popeyes)'`,
      github:
        'https://github.com/raulmartinez1855/wyncode-hackathon/tree/raul-martinez',
      demo: 'https://tender-sinoussi-aac2c6.netlify.com/',
    },
    {
      name: 'Color Match Game',
      description: `'first game ever made. It is a simple color matching game'`,
      github: 'https://github.com/raulmartinez1855/colors',
      demo: 'https://frosty-fermat-5aae61.netlify.com/',
    },
    {
      name: 'Addition Game',
      description: `'Game that requires users to choose 4 numbers that add up to the number displayed before time runs out'`,
      github: 'https://github.com/raulmartinez1855/adding-game',
      demo: 'https://jovial-jones-dcd1bc.netlify.com',
    },
  ]
  render() {
    return (
      <div className="projects">
        <h3 className="section-title">Projects</h3>
        <div className="project-wrapper">
          <div className="project variable">const projects = [</div>
          {this.projects.map((o, i) => {
            const isLast = this.projects.length - 1 === i
            return (
              <div v key={i}>
                <div className="project">&#123;</div>
                <div className="project property">
                  demo: <a href={o.demo}>{o.name}</a>,
                </div>
                <div className="project property">
                  description: {o.description},
                </div>
                <div className="project property">
                  github: <a href={o.github}>{o.github}</a>
                </div>
                <div className="project">
                  &#125;
                  {!isLast && ','}
                </div>
              </div>
            )
          })}
          <div className="project variable">];</div>
        </div>
      </div>
    )
  }
}

export default Projects
