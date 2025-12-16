import React from 'react'
import Hero from '../components/Hero'
import BGRemoval from '../components/BGRemoval'
import BGSlider from '../components/BGSlider'

const Home = () => {
    return (
        <div className='px-8 py-28 w-full '>
            
            <Hero/>
            <BGRemoval/>
            <BGSlider/>

        </div>
    )
}

export default Home
