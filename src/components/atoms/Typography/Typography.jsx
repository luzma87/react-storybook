import React from 'react';
import PropTypes from 'prop-types';
import './typography.css';

const variants = [
  'title',
  'subtitle',
  'highlight',
  'button',
  'text',
  'caption',
]
const colors = [
  'primary',
  'secondary',
  'mustard',
  'blue',
  'coral-red',
  'light-blue',
  'light-mustard',
  'white',
  'gray',
  'charcoal',
]


export const Typography = ({ variant, color, children, ...props }) => {
  return (
    <div
      className={['typography', `typography--${variant}`, `typography--${color}`].join(' ')}>
      {children}
    </div>
  );
};

Typography.defaultProps = {
  variant: 'text',
  color: 'primary'
};

Typography.propTypes = {
  variant: PropTypes.oneOf(variants),
  color: PropTypes.oneOf(colors),
};
