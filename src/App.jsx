import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import DashboardHeader from './Components/DashboardHeader';
import LandingPage from './Components/LandingPage';
import SignInPage from './Components/SignInPage';
import SignUpPage from './Components/SignUpPage';
import UserDashboard from './Components/UserDashboard';
import GetFitForm from './Components/GetFitForm';
import CalorieResult from './Components/CalorieResult'; // Import the new component

import './App.css'; 

function App() {
  const GOOGLE_CLIENT_ID = "969110296319-4rfbnj8n2egj5uvuukfjna055l0sc68h.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <DashboardHeader />
        <div style={{ paddingTop: '70px' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/getfit" element={<GetFitForm />} />
            <Route path="/calories" element={<CalorieResult />} /> {/* New route */}
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;