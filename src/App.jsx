import React from 'react'
import logo from "./assets/logo1.png";
import MenuBar from './components/MenuBar';
import { useTheme } from './context/ThemeContext';
import Home from './pages/Home';
const App = () => {
  
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`${theme == 'light' ? 'text-black bg-white': 'text-white dark:bg-[#0f0f0f]'}`}>
      <MenuBar/> 
      <Home/>
    </div>
  )
}

export default App
