import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { useTheme } from '../context/ThemeContext';
import { Menu, X } from 'lucide-react';
const MenuBar = () => {
    const[menuOpen,setMenuOpen]= useState(false);   
    const { theme, toggleTheme } = useTheme();

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
                    
                    
                    <div className="flex items-center space-x-2">
                    <img
                        src={assets.logo}
                        alt="app-logo"
                        className="h-14 md:h-16 w-auto object-contain cursor-pointer"
                    />
                    </div>
                    
                    <div className="flex gap-4 items-center">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="cursor-pointer py-[0.6rem] px-[1.4rem] rounded-md bg-gray-100 dark:bg-gray-800 origin-center hover:-translate-y-0.5"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>

                        <div className='hidden md:flex items-center gap-4'>
                            <button className="button text-xl font-bold hover:border-orange-400">
                                Login
                            </button>
                            <button className="button text-xl font-bold">
                                Signup
                            </button>

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
                                <button className='button mx-6 '>Login</button>
                                <button className='button mx-6 '>Signup</button>

                            </div>
                    </div>
                )}

            </nav>

        </div>
    )
}

export default MenuBar
