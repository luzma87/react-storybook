import * as React from "react"
import PropTypes from 'prop-types'

const MenuHamburger = ({fill, ...props}) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 44h40M4 24h40M4 4h40"
      stroke={fill}
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

MenuHamburger.propTypes = {
  fill: PropTypes.string
}

MenuHamburger.defaultProps = {
  fill: '#1D1E41'
}

export default MenuHamburger
