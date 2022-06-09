import React from 'react'
import PropTypes from 'prop-types'
import './menuItem.css'
import {Typography} from '../Typography/Typography'

const MenuItem = ({label, isSelected, onClick}) => {
  return (
    <div className="menu-item">
      <button onClick={onClick}>
        <Typography variant="button">
          {label}
        </Typography>
      </button>
      {isSelected && (<div className="menu-item-selected-marker" />)}
    </div>
  )
}

MenuItem.defaultProps = {
  isSelected: false,
  onClick: undefined
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}

export default MenuItem
