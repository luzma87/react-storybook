import * as React from "react"
import PropTypes from 'prop-types'

const Logo = ({fill, size, ...props}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.983 2.917c-4.95 0-8.966 4.016-8.966 8.966 0 4.95 4.016 8.967 8.966 8.967 4.95 0 8.967-4.017 8.967-8.967s-4.017-8.966-8.967-8.966ZM10.6 21.717a5.559 5.559 0 0 0-5.55 5.55 5.548 5.548 0 0 0 5.55 5.55c3.05 0 5.55-2.484 5.55-5.55 0-3.067-2.5-5.55-5.55-5.55ZM27.7 27.7a4.687 4.687 0 0 0-4.683 4.683c0 2.584 2.1 4.684 4.683 4.684 2.583 0 4.683-2.1 4.683-4.684 0-2.583-2.1-4.683-4.683-4.683Z"
      fill={fill}
    />
  </svg>
)

Logo.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
}

Logo.defaultProps = {
  fill: '#1D1E41',
  size: 48
}

export default Logo
