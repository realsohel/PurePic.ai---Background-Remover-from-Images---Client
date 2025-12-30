import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { useTheme } from '../context/ThemeContext';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useAppContext } from '../context/AppContext';

const MenuBar = () => {
    const[menuOpen,setMenuOpen]= useState(false);   
    const { theme, toggleTheme } = useTheme();
    const {openSignUp, openSignIn} = useClerk();
    const {user} = useUser();
    const {credits}=useAppContext();
    const navigate = useNavigate();
    
    const openRegister=()=>{
        setMenuOpen(false);
        openSignUp({});
    }
    
    const openLogin=()=>{
        setMenuOpen(false);
        openSignIn({});
    }

    return (
        <div className=''>
            <nav
                className={`fixed top-0 w-full z-50 backdrop-blur-md
                    ${theme === 'light'
                    ? 'bg-white/60'
                    : 'bg-[#0f0f0f]/60'
                    }
                `}
            >
                <div className="max-w-8xl mx-auto px-2 py-2 flex justify-between items-center">
                    
                    <Link  to="/" className="flex items-center space-x-2">
                        <img
                            src={assets.logo}
                            alt="app-logo"
                            className="h-14 md:h-16 w-auto object-contain cursor-pointer"
                        />
                    </Link>
                    
                    <div className="flex gap-4 items-center">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="cursor-pointer py-[0.6rem] px-[1.4rem] rounded-md bg-gray-100 dark:bg-gray-800 origin-center hover:-translate-y-0.5"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>

                        <div className='hidden md:flex items-center gap-4'>
                            <SignedOut>
                                <button onClick={openLogin} className="button text-xl font-bold hover:border-orange-400">
                                    Login
                                </button>
                                <button onClick={openRegister} className="button text-xl font-bold">
                                    Signup
                                </button>
                            </SignedOut>
                            <SignedIn>
                                <div className='flex items-center gap-2 sm:gap-3' >
                                    <button className="cursor-pointer flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2.5 
                                        rounded-full hover:scale-105 transition-all duration-500 border border-orange-300 text-white"
                                        style={{ background: "var(--orange-gradient)" }}
                                        onClick={()=>navigate("/buy-credits")}
                                    >
                                        <img src={assets.credits} alt="" height={26} width={26}/>
                                        <p className="text-lg font-semibold">
                                            Credits: <span className='py-auto'> {credits} </span>
                                        </p>
                                    </button>
                                    <p className="font-bold text-md hidden md:block">Hi, {user?.firstName}</p>
                                    <UserButton />
                                </div>
                            </SignedIn>
                        </div>
                        {/* Mobile Humburger */}
                        <div className="flex md:hidden z-50">
                            <button onClick={()=>setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={28}/> : <Menu size={28}/>}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className=" md:hidden block absolute  top-16 right-6  bg-white shadow-black shadow-xl rounded-md   items-center w-40">
                        <div className="my-4 flex flex-col space-y-4">
                            <SignedOut>
                                <button className='button mx-6 ' onClick={openLogin} >Login</button>
                                <button className='button mx-6 ' onClick={openRegister}>Signup</button>
                            </SignedOut>

                            <SignedIn>
                                <div className='flex flex-col items-center gap-4 p-1' >
                                    <UserButton />
                                    <p className="font-bold text-md text-black md:block">Hi, {user?.firstName}</p>
                                    <button className="cursor-pointer flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2.5 
                                        rounded-full scale-105 transition-all duration-500 border border-orange-300 text-white"
                                        style={{ background: "var(--orange-gradient)" }}
                                        onClick={()=>navigate("/buy-credits")}
                                    >
                                        <img src={assets.credits} alt="" height={26} width={26}/>
                                        <p className=" font-semibold">
                                            Credits: <span className='py-auto'> {credits} </span>
                                        </p>
                                    </button>
                                </div>
                            </SignedIn>
                        </div>
                    </div>
                )}

            </nav>

        </div>
    )
}

export default MenuBar
