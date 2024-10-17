"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
import Link from 'next/link'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*Desktop */}
      <div className='bg-orange-custom hidden md:flex md:flex-row justify-between p-5 items-center w-full'>
        <div className='flex flex-row gap-8 items-center justify-start'>
          <Image src="/assets/iskon.png" alt="logo" width={70} height={70} />

          <h1 className='text-orange-600 font-semibold text-2xl'>ISKON HAZARIBAGH</h1>

        </div>


        <div className='flex items-center justify-start gap-10 mr-6'>
          <Link href="/"><p className='text-gray-600 hover:text-orange-600 font-semibold'>Home</p></Link>
          <Link href="/donate"><p className='text-gray-600 hover:text-orange-600 font-semibold'>Donate</p></Link>
          <Link href="/gallery"><p className='text-gray-600 hover:text-orange-600 font-semibold'>Gallery</p></Link>
        </div>
      </div>

      {/*Mobile */}
      <div className={`fixed p-3 flex flex-row md:hidden items-center justify-between w-full  bg-opacity-70`}>
        <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className='text-2xl text-orange-600' />

        <Image src="/assets/iskon.png" alt="logo" width={50} height={50} />



        {
          isOpen && <div className=' md:hidden fixed top-5 left-0 w-full h-fit flex flex-col items-center justify-center z-40 bg-orange-custom'>
            <div className="flex flex-col gap-4 items-center justify-center">
              <Link href="/"><p className='text-orange-600 font-semibold'>Home</p></Link>
              <Link href="/"><p className='text-orange-600 font-semibold'>Donate</p></Link>
              <Link href="/"><p className='text-orange-600 font-semibold'>Gallery</p></Link>

            </div>
          </div>
        }
      </div>

    </>
  )
}

export default Navbar
