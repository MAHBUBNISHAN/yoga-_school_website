import React from 'react'
import HeroSlider from '../../components/Slider/Slider'
import PopularClasses from '../../components/PopularClasses/PopularClasses'
import PopularInstructors from '../../components/PopularInstructors/PopularInstructors'

const Home = () => {
  return (
    <div>
        <HeroSlider/>
        <PopularClasses/>
        <PopularInstructors/>
    </div>
  )
}

export default Home