import React from 'react'
import DonationBox from '@/components/DonationBox'
import Image from 'next/image'

function Page() {
  return (

    <div className='relative bg-orange-custom w-full flex flex-col items-center justify-center p-10 md:p-12'>
      
      
      {/* Banner */}
      <div className='relative z-10 bg-banner bg-cover h-48 w-[85%] md:w-[92%] rounded-xl text-white flex flex-col items-center justify-center gap-4 p-10 shadow-lg mt-12 md:m-0'>
        <h1 className='font-semibold text-xl md:text-3xl text-center'>Commit Monthly Donation</h1>
        <h2 className='font-semibold text-lg md:text-2xl text-center'>Nitya Seva</h2>
      </div>

      {/* Donation Boxes */}
      <div className='relative z-10 w-[85%] flex flex-col gap-5 mt-8'>
        <DonationBox image="/assets/iskon.png" amt="500" frq="monthly" />
        <DonationBox image="/assets/iskon.png" amt="1000" frq="monthly" />
        <DonationBox image="/assets/iskon.png" amt="1500" frq="monthly" />
      </div>
    </div>
  )
}

export default Page
