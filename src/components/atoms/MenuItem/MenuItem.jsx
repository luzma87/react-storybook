import React from 'react'
import PropTypes from 'prop-types'
import './menuItem.css'

const MenuItem = ({label, isSelected}) => {
  return (
    <div className="menu-item">
      <span>{label}</span>
      {isSelected && (<div className="menu-item-selected-marker" />)}
    </div>
  )
}

MenuItem.defaultProps = {
  isSelected: false
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool
}

export default MenuItem
