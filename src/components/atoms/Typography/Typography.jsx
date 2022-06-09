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
  'code'
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
  const colorClass = color ? `typography--${color}` : ''
  return (
    <div
      className={['typography', `typography--${variant}`, colorClass].join(' ')}>
      {children}
    </div>
  );
};

Typography.defaultProps = {
  variant: 'text',
};

Typography.propTypes = {
  variant: PropTypes.oneOf(variants),
  color: PropTypes.oneOf(colors),
};
