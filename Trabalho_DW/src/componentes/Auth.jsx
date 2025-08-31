import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import '../style/Auth.css';

function Auth() {
  const [currentView, setCurrentView] = useState('login'); // 'login' ou 'register'

  const switchToRegister = () => {
    setCurrentView('register');
  };

  const switchToLogin = () => {
    setCurrentView('login');
  };

  return (
    <div className="app">
      <div className="particles"></div>
      <div className="container">
        {currentView === 'login' ? (
          <Login onSwitchToRegister={switchToRegister} />
        ) : (
          <Register onSwitchToLogin={switchToLogin} />
        )}
      </div>
    </div>
  );
}

export default Auth;
