import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { plans } from '../assets/assets';
import { useAuth, useClerk } from '@clerk/clerk-react';
import { placeOrder } from '../service/OrderService';
import { useAppContext } from '../context/AppContext';

const BuyCredits = () => {
    const{theme} = useTheme();
    const {isSignedIn, getToken} = useAuth();
    const {openSignIn} = useClerk();
    const {loadUserCredits, backendUrl} = useAppContext();
    
    const handleOrder=(planId)=>{
        console.log("hello" + planId);
        if(!isSignedIn){
            return openSignIn();
        }
        console.log("Hello Boss")
        placeOrder({
            planId,
            getToken, 
            onSuccess:()=>{
                loadUserCredits();
            },
            backendUrl
        });

    }
    return (
        <div className='py-16 h-full md:px-20 lg:px-20'>
            <div className="container mx-auto px-4">

                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold my-8 text-orange-400">
                        Choose your perfect package.
                    </h2>
                    <p className={`text-lg mx-auto mt-4 max-w-3xl ${theme=='dark'? 'secondaryText': 'text-gray-600'} font-semibold`} >
                        Choose a plan that fits your usage, whether you're an individual or a growing business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        plans.map((plan)=>(
                            <div key={plan.id} className=
                                {`border border-orange-300 pt-6 p-6 shadow-md md:shadow-lg
                                    ${theme === 'light'? 'bg-white text-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)]': 'text-white shadow-orange-400'}
                                    ${plan.popular ? 'backdrop-blur-lg rounded-2xl ' : 
                                    'text-gray-800 rounded-xl'} bg-[#1A1A1A] hover:transform hover:-translate-y-2 transition-all duration-300` }>
                                {plan.popular && (
                                    <div className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-400 px-3 py-1 text-white text-sm font-semibold'>
                                        Most Popular
                                    </div>
                                )}

                                <div className="text-center p-6">
                                    <h3 className='text-2xl font-bold '>
                                        {plan.name} 
                                    </h3>

                                    <div className="mt-4 text-center">
                                        <span className='text-4xl text-orange-400 font-bold'>
                                            &#8377;{plan.price}
                                        </span>
                                    </div>
                                </div>

                                <div className="px-4 pb-8">
                                    <ul className="mb-8 space-y-4 flex flex-col items-center justify-center text-center">
                                        
                                        <li className="text-xl flex items-center gap-2 font-semibold">
                                        {plan.credits} 🪙
                                        </li>

                                        <li className="font-medium max-w-sm">
                                        {plan.description}
                                        </li>

                                    </ul>
                                </div>

                                <button className='w-full button text-xl font-bold' onClick={()=>handleOrder(plan.id)}>
                                    Choose Your Plan
                                </button>

                            </div>
                        ))
                    }

                </div>
            </div>
            
        </div>
    )
}

export default BuyCredits
