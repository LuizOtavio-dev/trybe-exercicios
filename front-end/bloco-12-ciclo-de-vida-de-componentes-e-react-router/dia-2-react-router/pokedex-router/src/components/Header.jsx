import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <nav>
          <Link to={ '/' } className='link'>Home</Link>
          <Link to={ '/about' } className='link'>About</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
