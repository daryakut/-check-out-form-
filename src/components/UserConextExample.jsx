// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from "react";

// Step 1: Create a context
const UserContext = createContext();

// Step 2: Create a context provider
// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Step 3: Use the context provider in your App component
const App = () => {
  return (
    <UserProvider>
      <MainComponent />
    </UserProvider>
  );
};

// Step 4: Create a component that consumes the context using useContext
const MainComponent = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={login} />
      )}
    </div>
  );
};

// Example of a component that modifies context data
// eslint-disable-next-line react/prop-types
const LoginForm = ({ onLogin }) => {
  const handleLogin = () => {
    // Simulating a login process
    const userData = { id: 1, name: "John Doe" };
    onLogin(userData);
  };

  return (
    <div>
      <p>Please login:</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default App;
