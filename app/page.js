"use client"
import { useRef } from "react";
import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import People from "@/components/People";
import AboutFounder from "@/components/AboutFounder";
import Footer from "@/components/Footer";
import { haRa } from "./layout";
import Link from "next/link";
import { LuArrowDownCircle } from "react-icons/lu";

export default function Home() {
  const aboutUsRef = useRef(null); // Ref for AboutUs section

  const handleScrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to AboutUs
    }
  };

  return (
    <>
      <div className="relative bg-orange-custom flex flex-col items-center justify-center">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 hidden lg:flex items-center justify-center">
          <Image 
            src="/assets/bg_pattern.png" 
            height={750}
            width={750}
            className="opacity-10" // Set low opacity
            alt="Background Pattern"
          />
        </div>
        <div className="absolute inset-0 w-full h-full z-0 flex lg:hidden items-center justify-center">
          <Image 
            src="/assets/bg_pattern.png" 
            height={550}
            width={550}
            className="opacity-20" // Set low opacity
            alt="Background Pattern"
          />
        </div>
        
        {/* Text section */}
        <div className={`relative z-10 flex flex-col items-center justify-center gap-3 md:gap-5 ${haRa.className}`}>
          <div className="flex flex-row gap-3 mt-24 md:mt-4">
            <span className="text-[40px] custom-sm:text-[60px] md:text-[80px] custom-lg:text-[126px] font-medium font-hara">Experience</span>
            
            <div className="rounded-[85px] p-1  w-40 md:w-80 hidden md:block object-cover">
              <Image src="/assets/krishna1.jpg" alt="pic" height={350} width={350} className='rounded-full' />
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <span className="text-[40px] custom-sm:text-[60px] md:text-[80px] custom-lg:text-[126px] font-medium font-hara">Divine{" "}</span>
            <div className="rounded-[85px] p-1  w-40 md:w-80 hidden md:block">
            <Image src="/assets/krishna2.jpg" alt="pic" height={350} width={350} className='rounded-full' />
            </div>
            <span className="text-[40px] custom-sm:text-[60px] md:text-[80px] custom-lg:text-[126px] font-medium font-hara">Bliss At</span>
          </div>

          <div className="flex flex-row">
            <span className="text-[40px] custom-sm:text-[60px] md:text-[80px] custom-lg:text-[126px] font-medium font-hara">ISKCON HAZARIBAGH</span>
          </div>
        </div>

        {/* Arrow and buttons */}
        <div className="relative z-10 flex flex-row gap-5 w-full md:w-[80%] items-center justify-center md:items-center md:justify-between">
        <Image src="/assets/scrollbtn.png" height={200} width={200} className="hidden md:block" alt="btn" onClick={handleScrollToAboutUs}/>
          <div className="flex flex-col gap-3 mr-0 md:mr-12">
            <span className="flex flex-col">
              <p className="text-sm md:text-md custom-lg:text-lg font-medium text-gray-500 text-center lg:text-left">
                Join Us in Celebrating Love, Devotion, and Peace
              </p>
              <p className="text-sm md:text-md custom-lg:text-lg font-medium text-gray-500 text-center lg:text-left">
                in the Heart of Hazaribagh
              </p>
            </span>

            <div className="flex flex-row gap-4 items-center justify-center md:items-start md:justify-start pb-20">
              <button
                className="rounded-md p-2.5 font-medium text-sm text-white bg-gray-800"
                type="button"
                onClick={handleScrollToAboutUs} // Call the scroll function
              >
                Explore
              </button>

              <Link href="/donate">
                <button className="rounded-md p-2 font-medium text-sm text-orange-600 border-2 border-orange-600">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* AboutUs section with the ref */}
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <AboutFounder />
      <People />
      <Footer />
    </>
  );
}
