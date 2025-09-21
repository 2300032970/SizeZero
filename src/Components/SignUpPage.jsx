import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import logoImage from './Images/Logo.png'; 

const SignUpPage = () => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate(); 

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
    scope: 'openid profile email' 
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v2/userinfo`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data));
          navigate('/dashboard'); 
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.logoButton}>
        <img src={logoImage} alt="SizeZero Logo" style={styles.logoImage} />
      </div>
      <h1 style={styles.welcomeMessage}>Create your account</h1>
      <p style={styles.signUpSubtitle}>Join our community to start your fitness journey</p>
      <div style={styles.formCard}>
        <button onClick={() => login()} style={styles.googleButton}>
          <span style={styles.googleIcon}>G</span>
          Sign up with Google
        </button>
        <div style={styles.separatorContainer}>
          <span style={styles.separatorLine}></span>
          <span style={styles.separatorText}>or</span>
          <span style={styles.separatorLine}></span>
        </div>
        <p style={styles.signInText}>
          Already have an account? <Link to="/login" style={styles.signInLink}>Sign in now</Link>
        </p>
      </div>
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
  signUpSubtitle: {
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
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '12px 20px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#555',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  googleIcon: {
    fontSize: '1.2rem',
    marginRight: '10px',
  },
  separatorContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '10px 0',
  },
  separatorLine: {
    flexGrow: 1,
    height: '1px',
    backgroundColor: '#ddd',
  },
  separatorText: {
    padding: '0 15px',
    color: '#888',
    fontSize: '0.9rem',
  },
  signInText: {
    fontSize: '0.9rem',
    color: '#666',
    marginTop: '20px',
  },
  signInLink: {
    color: '#28a745',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default SignUpPage;