import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  const register = () => setIsRegistered(true);
  const resetPassword = (email) => {
    console.log(`Password reset link sent to ${email}`);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isRegistered, login, logout, register, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
