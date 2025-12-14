import React from 'react'
import { assets } from '../assets/assets'
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();
    return (
        <div className='relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16'>
            {
                theme=='dark' && (<div className="orange-circle"/> )
            }
            <div className='relative order-2 md:order-1 flex justify-center '>
                <div className={`md:m-12 m-4  shadow-xl  
                    ${theme=='light'? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] ': 'shadow-orange-400 '} 
                    rounded-3xl overflow-hidden`
                }>
                    <video src={assets.video2} autoPlay loop muted className=' h-auto object-cover'></video>
                </div>
            </div>

            <div className="order-1 md:order-2 p-4">
                <h1 className='text-4xl md:text-5xl font-bold text-orange-400 mb-6 leading-tight'>
                    Pure Images, Zero Distractions. <span className={` ${theme=='light'? 'text-black ': 'text-white'} `}>Powered by AI.</span>
                </h1>
                <p className={`mb-8 text-xl md:text-2xl  leading-relaxed
                        ${theme=='dark'? 'secondaryText': 'text-gray-600'}
                    `}>
                    Turn any image into a clean, professional visual with PurePic.ai. 
                    Our AI-powered background remover detects your subject accurately and removes unwanted backgrounds in seconds. 
                    Create stunning visuals ready for designs, presentations, or social media.
                </p>
                
                <div>
                    <input type="file" accept='image/*' id='upload1' hidden/>
                    <label
                        htmlFor="upload1"
                        style={{ background: "var(--orange-gradient)" }}
                        className="text-xl font-bold inline-flex items-center  px-[1.4rem] py-4 text-white rounded transform transition-all duration-200 ease-out
                            hover:-translate-y-[1.5px] hover:shadow-lg  active:translate-y-0 cursor-pointer "
                    >
                        Upload your image
                    </label>


                </div>
            </div>
        </div>
    )
}

export default Hero
