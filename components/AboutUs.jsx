import React from 'react'
import Image from 'next/image'
function AboutUs() {
  return (
    <div className='bg-orange-custom flex flex-col gap-20 md:flex-row items-center justify-center p-12 md:p-24'>

      <Image src="/assets/orange_iskon.png" alt="mandir" height={400} width={300} className='rounded-[200px]' />

      <div className='w-[80%] md:w-[40%] flex flex-col items-center justify-center gap-8'>
        <h1 className='text-blue-600 font-semibold text-[40px] md:text-[56px] font-hara'>About us</h1>
        <div className='font-semibold text-md text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
    </div>
  )
}

export default AboutUs
