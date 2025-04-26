import { useState, useContext, createContext } from 'react';

// Create the context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Correct: directly setting initial value based on token
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
