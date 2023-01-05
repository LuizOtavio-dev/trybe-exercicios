import React from "react";
import PropTypes from 'prop-types';
import '../styles/button.css';

class Button extends React.Component {
  render() {
    const { className, children, disable, onClick} = this.props;
    return (
      <button
        onClick={onClick}
        className={`button-text ${className}`}
        disabled={disable}
        type='button'
      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  disable: false,
}

Button.propTypes = ({
  className: PropTypes.string,
  children: PropTypes.node,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
}).isRequired

export default Button;
