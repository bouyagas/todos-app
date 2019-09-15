import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = () => {
    return {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '10px',
    };
  };

  const linkdStyle = () => {
    return {
      color: '#ffffff',
      textDecoration: 'none',
    };
  };

  return (
    <div style={headerStyle()}>
      <h1>TodoList</h1>
      <Link style={linkdStyle()} to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkdStyle()} to="/about">
        About
      </Link>
    </div>
  );
};

export default Header;
