import React from 'react'
import Image from 'next/image'
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { FaRegEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'
function Footer() {
  return (
    <div className='bg-[#E4C087] text-white flex flex-col gap-3 md:flex-row items-center justify-between p-8'>
      <div className='flex flex-col gap-2 items-center justify-center w-[85%] md:w-[40%]'>
      <Image src="/assets/iskon.png" alt="mandir" height={60} width={60}  />
        <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
      </div>

    <div className='flex flex-col gap-3'>

    <div className='flex flex-row gap-10'>
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold'>Quick Links</h1>
            <h1>Kriyas</h1>
            <h1>More Kriyas</h1>
            <h1>Blog</h1>
            <Link href="/terms_condition"><h1>Terms and Conditions</h1></Link>
            <Link href="/privacy_policy"><h1>Privacy Policy</h1></Link>
        </div>
        <div className='flex flex-col gap-4'>
        <h1 className='font-semibold'>Contact us</h1>
        <span className='flex flex-row gap-2 items-center'>
        <FaPhone className='border border-white rounded-md p-1 text-2xl'/>
        <p>+91 1234567890</p>
        </span>

        <span className='flex flex-row gap-2'>
        <FaRegEnvelope className='border border-white rounded-md p-1 text-2xl'/>
        <p>contact@utsavapp.in</p>
        </span>

        <span className='flex flex-row gap-2'>
        <SlLocationPin className='border border-white rounded-md p-1 text-2xl'/>
        <p>India</p>
        </span>
        </div>
      </div>


        {/*Following links */}
        <div className='flex flex-row gap-3'>
        <span>Follow Us {" "} </span>
        <div className='flex flex-row gap-4'>
        <FaTwitter className='text-2xl'/>
        <FaInstagram className='text-2xl'/>
        <FaFacebook className='text-2xl'/>
        <FaWhatsapp className='text-2xl'/>
        </div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
