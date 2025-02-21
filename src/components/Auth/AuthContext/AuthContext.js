import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [userRole, setUserRole] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('userRole');
    if (token) {
      setIsAuthenticated(true);
      setAuthToken(token);
      setUserRole(role);
    }
  }, []);

  const login = (token, role) => {
    setIsAuthenticated(true);
    setAuthToken(token);
    setUserRole(role);
    localStorage.setItem('authToken', token);
    localStorage.setItem('userRole', role);
  };



  const logout = () => {
    setIsAuthenticated(false);
    setAuthToken(null);
    setUserRole(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
