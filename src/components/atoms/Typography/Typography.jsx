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
const styles = [
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


export const Typography = ({ variant, style, children, ...props }) => {
  return (
    <div
      className={['typography', `typography--${variant}`, `typography--${style}`].join(' ')}>
      {children}
    </div>
  );
};

Typography.defaultProps = {
  variant: 'text',
  style: 'primary'
};

Typography.propTypes = {
  variant: PropTypes.oneOf(variants),
  style: PropTypes.oneOf(styles),
};
