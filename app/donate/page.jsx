import React from 'react'
import DonationBox from '@/components/DonationBox'
import Image from 'next/image'

function Page() {
  return (
   
    
    <div className=' bg-orange-custom w-full flex flex-col items-center justify-center p-10 md:p-12  h-full'>
      
      {/* <div className="absolute -bottom-[30%] -right-[50%] w-full h-full z-0 hidden lg:flex items-start justify-start">
          <Image 
            src="/assets/bg_pattern.png" 
            
           height={750}
           width={750}
            className="opacity-20" // Set low opacity
            alt="Background Pattern"
          />
        </div> */}
      {/* Banner */}
      <div className='relative z-10 bg-banner bg-cover h-48 w-[85%] md:w-[92%] rounded-xl text-white flex flex-col items-center justify-center gap-4 p-10 shadow-lg mt-20  md:m-0'>
        <h1 className='font-semibold text-xl md:text-3xl text-center'>Commit Monthly Donation</h1>
        <h2 className='font-semibold text-lg md:text-2xl text-center'>Nitya Seva</h2>
      </div>

      {/* Donation Boxes */}
      <div className='relative z-10 w-[85%] flex flex-col gap-8 mt-8   mb-20'>
        <DonationBox image="/assets/iskon.png"  frq="Recurring" />
        <DonationBox image="/assets/iskon.png"  frq="one time" />
      </div>
    </div>
    
  )
}

export default Page
