import React from 'react'
import Hero from '../components/Hero'
import BGRemoval from '../components/BGRemoval'
import BGSlider from '../components/BGSlider'
import Pricing from '../components/Pricing'
import Testimonial from '../components/Testimonial'
import TryNow from '../components/TryNow'

const Home = () => {
    return (
        <div className='px-8 py-28 w-full '>
            
            <Hero/>
            <BGRemoval/>
            <BGSlider/>
            <Pricing/>
            <Testimonial/>
            <TryNow/>
        </div>
    )
}

export default Home
