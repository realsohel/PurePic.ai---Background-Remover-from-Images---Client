import React from 'react'
import logo from "./assets/logo1.png";
import MenuBar from './components/MenuBar';
import UserSyncHandler from './components/UserSyncHandler';
import { useTheme } from './context/ThemeContext';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';
import Result from './pages/Result';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import BuyCredits from './pages/BuyCredits';
const App = () => {
  
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`${theme == 'light' ? 'text-black bg-white': 'text-white dark:bg-[#0f0f0f]'}`}>
      <UserSyncHandler/>
      <MenuBar/> 
      <Toaster/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/result' element={
          <>
            <SignedIn>
              <Result/>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn/>
            </SignedOut>
          </>}
        />

        <Route exact path='/buy-credits' element={
          <>
            <SignedIn>
              <BuyCredits/>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn/>
            </SignedOut>
          </>}
        />
        <Route exact path='/*' element={<NotFound/>}/>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
