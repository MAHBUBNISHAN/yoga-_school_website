import { Slide, Overlay, AutoplayButton } from 'hero-slider'
import HeroSlider from 'hero-slider/dist/HeroSlider'
import React from 'react'
import { Typography } from "@material-tailwind/react";
const sliderImages = [
    'https://www.dabur.com/sites/default/files/inline-images/Importance%20and%20Benefits%20of%20Yoga%201020x450.jpg',
    'https://www.scoopearth.com/wp-content/uploads/2022/05/Yoga.jpg',
]
const Slider = () => {
    return (
        <HeroSlider
            height='80vh'
            controller={{
                initialSlide: 1,
                slidingDuration: 200,
                slidingDelay: 50,

            }}
           
        >

           <Overlay>
                <div className="flex flex-col items-center justify-center text-center px-8 md:px-36 bg-black opacity-30 h-[250px] md:h-[650px]">
                    <p className='text-xl mb-2 text-white font-bold md:text-4xl'>
                        Yoga School
                    </p>
                    <p className="text-xs md:text-sm text-teal-200" variant="h5">
                        Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six Āstika (orthodox) schools of Hindu philosophical traditions.
                    </p>
                </div>
           </Overlay>



            {
                sliderImages.map((image, index) => (
                    <Slide key={index}>

                        <img className='w-full h-[250px] md:h-[650px] object-cover' src={image} />


                    </Slide>
                ))

            }



        </HeroSlider>
    )
}

export default Slider