import React from 'react';

const DashboardCard = ({ title, value, unit, icon, progress, progressGoal, iconBgColor }) => {
  const progressBarWidth = progressGoal > 0 ? (progress / progressGoal) * 100 : 0;

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div style={{ ...styles.iconContainer, backgroundColor: iconBgColor || '#e0f7fa' }}>
          {icon}
        </div>
        <span style={styles.growthIcon}>↗️</span> {/* Growth icon */}
      </div>
      <div style={styles.valueContainer}>
        <h2 style={styles.cardValue}>{value}</h2>
        <span style={styles.cardUnit}>{unit}</span>
      </div>
      <p style={styles.cardTitle}>{title}</p>
      
      {progressGoal > 0 && (
        <div style={styles.progressBarContainer}>
          <div style={styles.progressBarBackground}>
            <div style={{ ...styles.progressBarFill, width: `${Math.min(progressBarWidth, 100)}%` }}></div>
          </div>
          <div style={styles.progressText}>
            <span style={styles.progressLabel}>Progress</span>
            <span style={styles.progressGoal}>{progressGoal} {unit}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    width: '240px', // Adjusted width to fit 4 cards
    minHeight: '200px', // Increased height to accommodate progress bar
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    justifyContent: 'space-between', // Distribute content
    marginBottom: '20px', // Add margin for row spacing
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '15px',
  },
  iconContainer: {
    width: '45px',
    height: '45px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    // backgroundColor handled by prop
  },
  growthIcon: {
    fontSize: '1.2em',
    color: '#28a745', // Green color for growth indicator
    marginLeft: 'auto',
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '5px',
  },
  cardValue: {
    fontSize: '2.2em',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
    lineHeight: 1,
  },
  cardUnit: {
    fontSize: '0.9em',
    color: '#666',
    marginLeft: '5px',
    fontWeight: 'normal',
  },
  cardTitle: {
    fontSize: '0.9em',
    color: '#888',
    margin: '0 0 15px 0',
    textAlign: 'left',
    width: '100%',
  },
  progressBarContainer: {
    width: '100%',
    marginTop: 'auto', // Pushes it to the bottom
  },
  progressBarBackground: {
    height: '8px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '5px',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#28a745', // Green progress bar
    borderRadius: '4px',
    transition: 'width 0.5s ease-in-out',
  },
  progressText: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.8em',
    color: '#888',
  },
  progressLabel: {
    fontWeight: 'bold',
  },
  progressGoal: {
    fontWeight: 'normal',
  },
};

export default DashboardCard;