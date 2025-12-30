import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const {image, resultImage} = useAppContext();
    const {theme} = useTheme();
    const navigate = useNavigate();

    return (
        <div className='px-8 py-28 mx-4 min-h-[91vh] '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                
                <div className="flex flex-col ">
                    <p className={`font-semibold text-xl mb-2 ${theme =='dark' ? 'text-white' : 'text-gray-700'}`} >
                        Original Image
                    </p>
                    <div className={`p-8 rounded-md  border  
                        ${theme== 'light' ? 'border-gray-300 hover:shadow-xl':'border-orange-300 hover:shadow-xl shadow-orange-400' }`}>
                        {!image && (<p className='text-center text-xl'>No Image selected !!</p>)}
                        <img src={image ? URL.createObjectURL(image) :  assets.no_img} alt="Original image"  className='rounded-md  w-full object-cover'/>
                    </div>

                </div>

                <div className="flex flex-col">
                    <p className={`font-semibold text-xl mb-2 ${theme =='dark' ? 'text-white' : 'text-gray-700'}`} >
                        Background Removed Image
                    </p>

                    <div className={`p-8 rounded-md border h-full relative overflow-hidden ${theme== 'light' ? 'border-gray-300 hover:shadow-xl':'border-orange-300 hover:shadow-xl shadow-orange-400' }`}>
                        {!image && (<p className='text-center text-xl'>No Result Found !!</p>)}
                        <img src={resultImage || assets.no_img}  alt=" Background Removed Image"  className=' w-full object-cover'/>
                        {!resultImage && image && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="border-4 border-orange-400 rounded-full h-12 w-12 border-t-transparent animate-spin">
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {resultImage && (
                <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-8'>
                    <button className='button' onClick={()=>navigate("/")}>
                        Try another image
                    </button>

                    <a href={resultImage} download className='button cursor-pointer'>
                        Download Image 
                    </a>
                </div>
            )}
        </div>
    )
}

export default Result
