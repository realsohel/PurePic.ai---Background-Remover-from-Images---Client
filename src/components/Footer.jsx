import React from 'react'
import { assets, FOOTER_CONSTANTS } from '../assets/assets'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
    const {theme} = useTheme();

    return (
        <footer className={`flex items-center justify-between gap-4 px-4 lg:px-44 py-auto ${theme==='light' ? 'bg-white' : 'bg-[#1A1A1A]'}`}>
            <img src={assets.logo2} alt='logo' width={60}/>

            <p className="flex-1 border-l border-r px-2 border-gray-100 max-sm:hidden font-semibold">
                &copy; {new Date().getFullYear()} Mohd Sohel Salmani | All rights reserved.
            </p>

            <div className="flex gap-3">
                {FOOTER_CONSTANTS.map((foot)=>(
                    <a key={foot.id} href={foot.url} target='_blank' rel='noopener noreferrer'>
                        <img src={foot.logo} alt="social media" />
                    </a>
                ))}
            </div>

            <p className="text-center text-gray-700 font-medium"></p>
        </footer>
    )
}

export default Footer
