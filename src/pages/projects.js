import React, { Component } from 'react'
import Projects from '../components/Projects'
import Menu from '../components/Menu'
export default class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Projects />
      </div>
    )
  }
}
