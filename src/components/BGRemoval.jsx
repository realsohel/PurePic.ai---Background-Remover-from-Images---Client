import React from 'react'
import { steps } from '../assets/assets'
import { useTheme } from '../context/ThemeContext'

const BGRemoval = () => {
    const {theme} = useTheme();
    return (
        <div className='text-center mb-16'>
            <h2 className="py-6 text-3xl md:text-4xl font-bold my-12 text-orange-400">
                How To Remove Background In Seconds ?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    steps.map((step,idx)=>(
                        <div key={idx} className={`my-2 bg-gray-100 p-8 rounded-2xl ${theme==='light' ? 'shadow-lg ':'shadow-md shadow-orange-400 '} `}>
                            
                            <span className='my-2 inline-block bg-gray-200 border border-gray-300 text-orange-400 text-sm font-semibold px-3 py-1 rounded-full'>
                                {step.step}
                            </span>

                            <h1 
                                className={`text-xl font-bold my-4
                                ${theme==='light' ? 'text-black' : 'text-gray-600'}
                            `}>
                                {step.title}
                            </h1>

                            <p className='font-medium text-black text-start leading-relaxed'>
                                {step.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BGRemoval
