import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* "Welcome Back" Section */}
      <div style={styles.logoButton}>
        <span style={styles.logoIcon}>&#9889;</span>
        <span style={styles.logoText}>SizeZero</span>
      </div>
      <h1 style={styles.welcomeMessage}>Welcome back</h1>
      
      {/* "Transform Your Body" Section */}
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Transform Your Body</h1>
        <p style={styles.heroDescription}>
          Track your fitness journey with precision. Monitor workouts, calories, and progress all in one place.
        </p>
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>10K+</h2>
            <p style={styles.statText}>Active Users</p>
          </div>
          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>500M+</h2>
            <p style={styles.statText}>Steps Tracked</p>
          </div>
          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>98%</h2>
            <p style={styles.statText}>Success Rate</p>
          </div>
        </div>
      </div>

      {/* "Get Started" Section */}
      <h1 style={styles.title}>SizeZero</h1>
      <p style={styles.subtitle}>
        Your journey to a healthier, happier you begins here.
      </p>
      <Link to="/login" style={styles.button}>Get Started Today</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    fontFamily: 'sans-serif',
    color: '#333',
    padding: '20px',
  },
  logoButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#28A745',
    color: 'white',
    padding: '10px 25px',
    borderRadius: '8px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginTop: '50px',
    boxShadow: '0 4px 10px rgba(40, 167, 69, 0.2)',
  },
  logoIcon: {
    marginRight: '10px',
    fontSize: '1.8rem',
  },
  logoText: {},
  welcomeMessage: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 0 50px 0',
  },
  heroContent: {
    maxWidth: '800px',
    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
    color: '#fff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    marginBottom: '50px',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(234, 41, 41, 0.2)',
  },
  heroDescription: {
    fontSize: '1.2rem',
    marginBottom: '3rem',
    lineHeight: '1.6',
    fontWeight: '300',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  statCard: {
    backgroundColor: 'rgba(11, 193, 102, 0.15)',
    borderRadius: '12px',
    padding: '25px 40px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(34, 185, 31, 0.2)',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0',
  },
  statText: {
    fontSize: '1rem',
    marginTop: '5px',
    margin: '0',
    opacity: '0.8',
  },
  title: {
    fontSize: '3rem',
    color: '#29f072ff',
    marginBottom: '0.5rem',
    marginTop: '30px',
  },
  subtitle: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    lineHeight: '1.5',
    marginBottom: '2rem',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#29f79aff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginBottom: '50px',
    textDecoration: 'none',
  },
};

export default LandingPage;