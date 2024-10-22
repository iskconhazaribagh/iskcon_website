"use client";
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tinr } from '@/app/layout';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* Desktop */}
      <div className='bg-orange-custom hidden md:flex md:flex-row justify-between p-5 items-center w-full'>
        <div className='flex flex-row gap-8 items-center justify-start'>
          <Image src="/assets/orange_iskon.png" alt="logo" width={70} height={90} />
          <h1 className={`text-orange-600 font-semibold text-2xl ${tinr.className}`}>ISKCON HAZARIBAGH</h1>
        </div>

        <div className='flex items-center justify-start gap-10 mr-6'>
          <Link href="/">
            <p className={`font-semibold ${isActive('/') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>Home</p>
          </Link>
          <Link href="/donate">
            <p className={`font-semibold ${isActive('/donate') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>Donate</p>
          </Link>
          <Link href="/event_gallery">
            <p className={`font-semibold ${isActive('/event_gallery') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>Gallery</p>
          </Link>
          <Link href="/festivals">
            <p className={`font-semibold ${isActive('/festivals') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>Festivals & Yatras</p>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className='fixed top-0 left-0 w-full p-3 flex flex-row md:hidden items-center justify-start bg-orange-custom z-50'>
        {isOpen ? (
          <ImCross onClick={() => setIsOpen(!isOpen)} className='text-xl text-orange-600 cursor-pointer' />
        ) : (
          <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className='text-2xl text-orange-600 cursor-pointer' />
        )}

        <div className='flex items-center justify-center w-full'>
          <Image src="/assets/orange_iskon.png" alt="logo" width={70} height={70} />
        </div>
      </div>

      {/* Overlay Menu */}
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-80 bg-orange-custom bg-opacity-90 z-40 flex flex-col md:hidden items-center justify-center'>
          <div className="flex flex-col gap-6 items-center">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <p className='text-orange-600 font-semibold text-lg'>Home</p>
            </Link>
            <Link href="/donate" onClick={() => setIsOpen(false)}>
              <p className='text-orange-600 font-semibold text-lg'>Donate</p>
            </Link>
            <Link href="/event_gallery" onClick={() => setIsOpen(false)}>
              <p className='text-orange-600 font-semibold text-lg'>Gallery</p>
            </Link>
            <Link href="/festivals" onClick={() => setIsOpen(false)}>
              <p className='text-orange-600 font-semibold text-lg'>Festivals and Yatras</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
