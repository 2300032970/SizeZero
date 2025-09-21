import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardCard from './DashboardCard'; 

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleGetFitClick = () => {
    navigate('/getfit');
  };

  return (
    <div style={dashboardStyles.container}>
      <h1 style={dashboardStyles.title}>Welcome to your Dashboard!</h1>
      <p style={dashboardStyles.subtitle}>Your fitness journey begins now.</p>
      
      <div style={dashboardStyles.cardsContainer}>
        {/* Steps Card */}
        <DashboardCard 
          title="Steps Today" 
          value="8,547" 
          unit="steps" 
          icon="🚶‍♂️"
          iconBgColor="#e3f2fd"
          progress={8547}
          progressGoal={10000}
        />
        
        {/* Calories Burned Card */}
        <DashboardCard 
          title="Calories Burned" 
          value="487" 
          unit="kcal" 
          icon="🔥"
          iconBgColor="#ffe0b2"
          progress={487}
          progressGoal={600}
        />
        
        {/* Active Minutes Card */}
        <DashboardCard 
          title="Active Minutes" 
          value="45" 
          unit="mins" 
          icon="⏱️"
          iconBgColor="#e8f5e9"
          progress={45}
          progressGoal={60}
        />

        {/* Heart Rate Avg Card */}
        <DashboardCard 
          title="Heart Rate Avg" 
          value="78" 
          unit="bpm" 
          icon="❤️"
          iconBgColor="#ffebee"
          progress={78}
          progressGoal={75}
        />
      </div>

      <button onClick={handleGetFitClick} style={dashboardStyles.getFitButton}>
        Get Fit
      </button>
    </div>
  );
};

const dashboardStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 'calc(100vh - 70px)',
    backgroundColor: '#FFFFFF',
    fontFamily: 'sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#28a745',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '30px',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
    maxWidth: '1000px',
    paddingTop: '20px',
    overflowX: 'auto',
  },
  getFitButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '30px',
    marginRight: '10px',
  },
};

export default UserDashboard;