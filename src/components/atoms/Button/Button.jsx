import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import {Typography} from '../Typography/Typography'

const variants = ['light', 'dark', 'secondary']

export const Button = ({ variant, primary, size, label, deactive, ...props }) => {
  const mode = `button--${variant}`
  const deactiveClass = deactive ? 'button--deactive' : ''
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode, deactiveClass].join(' ')}
      disabled={deactive}
      {...props}
    >
      <Typography variant="button">
        {label}
      </Typography>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(variants),
  primary: PropTypes.bool,
  size: PropTypes.oneOf([ 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  deactive: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'light',
  primary: false,
  deactive: false,
  size: 'medium',
  onClick: undefined,
};
