import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false); 

  const login = (email, password) => {
    if (email === "15118@ramco.com" && password === "12345") {
      setUser(email);
      setAuthenticated(true); 
    }
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
