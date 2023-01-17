import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

const Button = ({ className, children, disabled, onClick }) => (
  <button
    type="button"
    onClick={ onClick }
    className={ `button-text ${className}` }
    disabled={ disabled }
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
