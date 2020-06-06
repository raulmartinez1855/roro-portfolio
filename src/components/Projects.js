import React, { Component } from 'react'

class Projects extends Component {
  projects = [
    {
      name: 'Timbit Dunker Game',
      description:
        'Whack-a-mole but with Tim Horton timbits. This game won 1st place at a hackathon at RBI headquarters(Owners of Tim Hortons, Burger King, and Popeyes)',
      github:
        'https://github.com/raulmartinez1855/wyncode-hackathon/tree/raul-martinez',
      demo: 'https://tender-sinoussi-aac2c6.netlify.com/',
    },
    {
      name: "Idania's Listings",
      description: `Full Stack Application I created for scraping public notices. The client is not a developer and wanted a 
        very simple way to grab new leads. I created a Backend API using Node, Express, and MongoDB. Then the 
        Frontend Is all in React. The bulk of the work is in a daily webscraper that will grab the public notices in paragraph format,
        then clean the data up and insert it into a database that will not allow duplicate records. The Frontend hits the Backend API
         and transforms the JSON into CSV format.`,
      github: 'https://github.com/raulmartinez1855/rim-realty-foreclosure-app',
      demo: 'https://idanias-listings.netlify.com/',
    },
    {
      name: 'Darker Dungeon Game',
      description: `Game built on React, used it to learn hooks better. This game is meant for Desktop and laptops, where you have access 
      to the arrow keys. You move your way through the randomly generated maps to find the treasure.`,
      github: 'https://github.com/raulmartinez1855/dark-dungeon',
      demo: 'https://darker-dungeon.netlify.app/',
    },
    {
      name: 'Tap Turn Swipe Game',
      description:
        'This is a game built on React for mobile and tablet browsers. It was inspired by the kids game Bop-It.',
      github: 'https://github.com/raulmartinez1855/tap-turn-swipe-game',
      demo: 'https://tapturnswipe.netlify.app/',
    },
    {
      name: 'Addition Game',
      description:
        'Game that requires users to choose 4 numbers that add up to the number displayed before time runs out',
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
              <div key={i}>
                <div className="project">&#123;</div>
                <div className="project property">
                  <strong>demo:</strong> <a href={o.demo}>{o.name}</a>,
                </div>
                <div className="project property">
                  <strong>description:</strong>{' '}
                  <span>
                    '{o.description}
                    ',
                  </span>
                </div>
                <div className="project property">
                  <strong>github:</strong>
                  <a href={o.github}>{o.github}</a>
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
