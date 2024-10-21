import React from 'react'
import Image from 'next/image'
import { haRa } from '@/app/layout'
const AboutUs = () => {
  return (
    <div className='bg-orange-custom flex flex-col gap-12 lg:flex-row items-center justify-center p-12 md:p-24' id="aboutus">

      <Image src="/assets/aboutus.jpeg" alt="mandir" height={600} width={500} className='rounded-[40px] shadow-xl shadow-orange-200' />

      <div className={`w-[80%] lg:w-[40%] flex flex-col items-center justify-center gap-6 `}>
        <h1 className={`text-blue-600 font-semibold text-[40px] md:text-[56px] ${haRa.className}`}>About us</h1>
        <div className='font-semibold text-md text-center md:text-left'>
        Lies in the heart of the city of Hazaribagh, the ISKCON spiritual chapter at Hazaribagh is situated on PTC Kanhari Road, opposite Vrindavasadan Colony. It is a newly started, vibrant place for spiritual activities, ranging from children's programs (ages 6 to 8, 8 to 13), youth programs, and family programs at various locations in Hazaribagh.        </div>
      </div>
    </div>
  )
}

export default AboutUs
