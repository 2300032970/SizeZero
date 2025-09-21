import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from './Images/Logo.png'; 

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    if (email && password) {
      // For now, let's just simulate a successful login
      console.log('User signed in:', email);
      navigate('/dashboard'); // Redirect to the dashboard
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoButton}>
        <img src={logoImage} alt="SizeZero Logo" style={styles.logoImage} />
      </div>
      <h1 style={styles.welcomeMessage}>Welcome back</h1>
      <p style={styles.signInSubtitle}>Sign in to your fitness journey</p>
      
      <form style={styles.formCard} onSubmit={handleLogin}>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email address</label>
          <div style={styles.inputWrapper}>
            <span style={styles.inputIcon}>📧</span>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              style={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <div style={styles.inputWrapper}>
            <span style={styles.inputIcon}>🔒</span>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              style={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span style={styles.eyeIcon}>👁️</span>
          </div>
        </div>
        <div style={styles.optionsGroup}>
          <label style={styles.checkboxContainer}>
            <input type="checkbox" style={styles.checkbox} />
            Remember me
          </label>
          <a href="#" style={styles.forgotPasswordLink}>Forgot password?</a>
        </div>
        <button type="submit" style={styles.signInButton}>Sign in</button>
        <p style={styles.signUpText}>
          Don't have an account? <Link to="/signup" style={styles.signUpLink}>Sign up now</Link>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    fontFamily: 'sans-serif',
    color: '#333',
    padding: '20px',
  },
  logoButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 20px',
    marginBottom: '20px',
  },
  logoImage: {
    height: '40px',
  },
  welcomeMessage: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
  },
  signInSubtitle: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '30px',
  },
  formCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    maxWidth: '400px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#555',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
  },
  inputIcon: {
    marginRight: '10px',
    color: '#888',
  },
  inputField: {
    flexGrow: 1,
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    backgroundColor: 'transparent',
    color: '#333',
  },
  eyeIcon: {
    marginLeft: '10px',
    color: '#888',
    cursor: 'pointer',
  },
  optionsGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.9rem',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  checkbox: {
    marginRight: '8px',
  },
  forgotPasswordLink: {
    color: '#28a745',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  signInButton: {
    padding: '12px 20px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '10px',
  },
  signUpText: {
    fontSize: '0.9rem',
    color: '#666',
    marginTop: '20px',
  },
  signUpLink: {
    color: '#28a745',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default SignInPage;