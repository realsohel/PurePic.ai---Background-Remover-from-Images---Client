import React from 'react'
import logo from "./assets/logo1.png";
import MenuBar from './components/MenuBar';
import { useTheme } from './context/ThemeContext';
const App = () => {
  
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`h-screen ${theme == 'light' ? 'text-black bg-white': 'text-white dark:bg-[#0f0f0f]'}`}>
      <MenuBar/> 
      <div>
        
      </div>
    </div>
  )
}

export default App
