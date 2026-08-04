import React, { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { ResultPage } from './components/ResultPage';

export const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main>
      {!isLoggedIn ? (
        <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <ResultPage onLogout={() => setIsLoggedIn(false)} />
      )}
    </main>
  );
};

export default App;
