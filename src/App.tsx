// src/App.tsx
import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import { getLoginPageData, LoginPageData } from './api/loginPage';

const handleLoginSubmit = (email: string, password: string) => {
  console.log('Login submitted:', { email, password });
  // Handle login logic
};

const App: React.FC = () => {
  const [data, setData] = useState<LoginPageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getLoginPageData()
      .then((response) => setData(response))
      .catch((err) =>
        setError(err instanceof Error ? err.message : String(err))
      );
  }, []);

  return (
    <LoginPage data={data} error={error} onSubmit={handleLoginSubmit} />
  );
};

export default App;
