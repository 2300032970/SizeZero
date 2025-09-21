import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetFitForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    goalWeight: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateBMR = (gender, weight, height, age) => {
    if (gender === 'male') {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { gender, weight, height, age, goalWeight } = formData;
    const bmr = calculateBMR(gender, Number(weight), Number(height), Number(age));

    let dailyCalories = bmr;

    if (Number(goalWeight) < Number(weight)) {
      dailyCalories -= 500;
    } else if (Number(goalWeight) > Number(weight)) {
      dailyCalories += 500;
    }

    localStorage.setItem('dailyCalories', dailyCalories.toFixed(0));
    navigate('/calories');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h2 style={styles.formTitle}>Your Fitness Plan</h2>
        <p style={styles.formSubtitle}>Enter your details to create a personalized plan.</p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name</label>
            <input name="name" type="text" style={styles.input} placeholder="Enter your full name" onChange={handleChange} value={formData.name} />
          </div>

          <div style={styles.inputRow}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Age</label>
              <input name="age" type="number" style={styles.input} placeholder="e.g., 25" onChange={handleChange} value={formData.age} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Gender</label>
              <select name="gender" style={styles.input} onChange={handleChange} value={formData.gender}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div style={styles.inputRow}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Height (cm)</label>
              <input name="height" type="number" style={styles.input} placeholder="e.g., 175" onChange={handleChange} value={formData.height} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Weight (kg)</label>
              <input name="weight" type="number" style={styles.input} placeholder="e.g., 70" onChange={handleChange} value={formData.weight} />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Goal Weight (kg)</label>
            <input name="goalWeight" type="number" style={styles.input} placeholder="e.g., 65" onChange={handleChange} value={formData.goalWeight} />
          </div>

          <button type="submit" style={styles.submitButton}>
            Save
          </button>
        </form>
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
  },
  formCard: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
  },
  formTitle: {
    fontSize: '2rem',
    color: '#28a745',
    marginBottom: '5px',
  },
  formSubtitle: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  inputRow: {
    display: 'flex',
    gap: '20px',
    width: '100%',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#555',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
  },
  submitButton: {
    padding: '12px 20px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default GetFitForm;