import React, { useEffect, useState } from 'react';
import AuthenticationRouter from './Router/AuthenticationRouter';
import UnAuthenticatedRouter from './Router/UnAuthenticatedRouter';

const App: React.FC = () => {
  const [Token, setToken] = useState(false);

  useEffect(() => {
    const TokenValue = localStorage.getItem('Token');
    setToken(TokenValue);
  }, [])
  


  if (Token === "RaselHossainAdib") {
    return (
      <AuthenticationRouter />
    )
  } else {
    return (
      <UnAuthenticatedRouter />
    )
  }
};

export default App;
