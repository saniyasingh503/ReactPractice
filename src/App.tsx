import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import Button from './components/Button';
import Header from './components/Header';



export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => { }
});


export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => { setTheme(theme == "dark" ? "light" : "dark") };
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <h1>Welcome to my app</h1>
        <Cart />
      </ThemeContext.Provider>
    </div>
  );
}

