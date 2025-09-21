import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImage from './Images/Logo.png'; 

const DashboardHeader = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use the useLocation hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // This effect will run every time the URL location changes
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]); // Add location to the dependency array

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logoLink}>
        <div style={styles.logoContainer}>
          <img
            src={logoImage}
            alt="SizeZero Logo"
            style={styles.logoImage}
          />
        </div>
      </Link>
      <nav style={styles.nav}>
        {isLoggedIn ? (
          <button onClick={handleSignOut} style={styles.signOutButton}>
            Sign Out
          </button>
        ) : (
          <Link to="/login" style={styles.loginButton}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
  },
  logoLink: {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '50px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  loginButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#28A745',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    textDecoration: 'none',
  },
  signOutButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#dc3545',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default DashboardHeader;