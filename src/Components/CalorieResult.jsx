import React, { useState, useEffect } from 'react';

const CalorieResult = () => {
  const [calories, setCalories] = useState(null);

  useEffect(() => {
    const dailyCalories = localStorage.getItem('dailyCalories');
    if (dailyCalories) {
      setCalories(dailyCalories);
    }
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Your Daily Calorie Goal</h2>
        {calories ? (
          <p style={styles.caloriesValue}>{calories} kcal</p>
        ) : (
          <p style={styles.noDataText}>No data available. Please fill out the form.</p>
        )}
        <p style={styles.description}>This is your estimated daily calorie intake to reach your goal.</p>
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
    minHeight: 'calc(100vh - 70px)',
    backgroundColor: '#FFFFFF',
    fontFamily: 'sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    fontSize: '1.5em',
    color: '#28a745',
    marginBottom: '10px',
  },
  caloriesValue: {
    fontSize: '4em',
    fontWeight: 'bold',
    color: '#333',
    margin: '0',
  },
  noDataText: {
    fontSize: '1.2em',
    color: '#dc3545',
    margin: '20px 0',
  },
  description: {
    fontSize: '1em',
    color: '#666',
    marginTop: '20px',
  },
};

export default CalorieResult;