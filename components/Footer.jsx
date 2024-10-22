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
    <div className='bg-[#E4C087] text-white flex flex-col gap-3 md:flex-row items-center justify-between p-6 md:p-10'>
      <div className='flex flex-col gap-2 items-center justify-center w-[85%] md:w-[40%]'>
      <Image src="/assets/iskon.png" alt="mandir" height={100} width={100}  />
        <p className='text-sm text-center font-medium'>
        At ISKCON Hazaribagh, we follow the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, offering spiritual growth through Vedic wisdom, community programs, and festivals. Our vision is to promote sustainable living, harmony with nature, and a life of 'simple living, high thinking' for all.        </p>
      </div>

    <div className='flex flex-col gap-3'>

    <div className='flex flex-row gap-10'>
        
      <div className='flex flex-col gap-4'>
      <h1 className='font-semibold text-lg'>Quick Links</h1>
      <Link href="/terms_conditions"><span>Terms and Conditions</span></Link>
      <Link href="/privacy_policy"><span>Privacy Policy</span></Link>
      </div>

        <div className='flex flex-col gap-4'>
        <h1 className='font-semibold text-lg'>Contact us</h1>
        <span className='flex flex-row gap-2 items-center'>
        <FaPhone className='border border-white rounded-md p-1 text-2xl'/>
        <p>+91 82106 65015</p>
        </span>

        <span className='flex flex-row gap-2'>
        <FaRegEnvelope className='border border-white rounded-md p-1 text-2xl'/>
        <p>iskconhazaribagh1@gmail.com</p>
        </span>

        <span className='flex flex-row gap-2'>
        <SlLocationPin className='border border-white rounded-md p-1 text-2xl'/>
        <p>PTC Kanhari Road, opposite Vrindavasadan Colony, Hazaribagh, Jharkhand.</p>
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
