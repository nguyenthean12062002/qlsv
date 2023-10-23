import { React, useState, createContext } from "react";
const UserContext = createContext({ name: "", auth: false });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", auth: true });
  const login = (name) => {
    setUser((user) => ({
      name: name,
      auth: true,
    }));
    localStorage.setItem("name", name);
  };
  // Logout updates the user data to default
  const logout = (name) => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
    localStorage.removeItem("name", name);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
