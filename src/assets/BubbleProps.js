import React from 'react'
import PropTypes from 'prop-types'

const BubbleProps = ({fill, width, height, ...props}) => (<svg
  width={width}
  height={height}
  viewBox="0 0 47 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path className="big-bubble" d="M29.8923 2.91669C24.1976 2.91669 19.5767 6.93335 19.5767 11.8834C19.5767 16.8334 24.1976 20.85 29.8923 20.85C35.587 20.85 40.208 16.8334 40.208 11.8834C40.208 6.93335 35.587 2.91669 29.8923 2.91669Z"
        fill={fill}/>
  <path className="left-bubble" d="M12.1947 21.7167C8.68589 21.7167 5.80978 24.2001 5.80978 27.2667C5.80978 30.3334 8.66672 32.8167 12.1947 32.8167C15.7036 32.8167 18.5797 30.3334 18.5797 27.2667C18.5797 24.2001 15.7036 21.7167 12.1947 21.7167Z"
        fill={fill}/>
  <path className="right-bubble" d="M31.8672 27.7002C28.8953 27.7002 26.4793 29.8002 26.4793 32.3835C26.4793 34.9669 28.8953 37.0669 31.8672 37.0669C34.8392 37.0669 37.2551 34.9669 37.2551 32.3835C37.2551 29.8002 34.8392 27.7002 31.8672 27.7002Z"
        fill={fill}/>
</svg>)

BubbleProps.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

BubbleProps.defaultProps = {
  fill: '#1D1E41',
  width: 47,
  height: 40
}

export default BubbleProps
