import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useAppContext } from '../context/AppContext';

const TryNow = () => {
    const {theme} = useTheme();
    const {removeBg} = useAppContext();

    return (
        <div className='flex flex-col items-center justify-center px-4 mx-auto sm:px-6 lg:px-8 py-12'>
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold my-8 text-orange-400">
                    Remove Image Background.
                </h2>
                <p className={`text-lg mx-auto mt-4 max-w-3xl ${theme=='dark'? 'secondaryText': 'text-gray-600'} font-semibold`} >
                    Get a transparent for any image.
                </p>
            </div>

            <div className={`hover:transform hover:-translate-y-2 transition-all duration-300 border border-orange-300 bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center space-y-4 
                ${theme=='light'? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] ': 'shadow-orange-400 '} 
            `}>
                <input type="file" accept='image/*' id='upload2' hidden onChange={(e)=>removeBg(e.target.files[0])}/>
                <label
                    htmlFor="upload2"
                    style={{ background: "var(--orange-gradient)" }}
                    className="text-center text-xl font-bold inline-flex items-center  px-[1.4rem] py-4 text-white rounded transform transition-all duration-200 ease-out
                        hover:-translate-y-[1.5px] hover:shadow-lg  active:translate-y-0 cursor-pointer "
                    
                >
                    Upload your image
                </label>
                <p className="text-sm font-medium text-gray-500">
                    Or Drop a file, paste image or{" "}
                    <a href="/" className="text-orange-400 underline hover:text-orange-500">
                        URL
                    </a>
                </p>

            </div>
        </div>
    )
}

export default TryNow
