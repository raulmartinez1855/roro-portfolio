import React from 'react'

const HamburgerButton = props => {
  let classes
  props.open ? (classes = 'hamburger change') : (classes = 'hamburger')
  return (
    <button onClick={props.click} className={classes}>
      <div className="bar-1" />
      <div className="bar-2" />
      <div className="bar-3" />
    </button>
  )
}

export default HamburgerButton
