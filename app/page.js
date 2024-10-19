import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import People from "@/components/People";
import Footer from "@/components/Footer";
import { haRa } from "./layout";
export default function Home() {
  return (
    <>
  <div className={`bg-orange-custom flex flex-col items-center justify-center `}>

    <div className={`flex flex-col items-center justify-center gap-3 md:gap-5 ${haRa.className}`}>
    <div className="flex flex-row gap-3 mt-20 md:mt-4">
    <span className="text-[40px] custom-sm:text-[60px] md:text-[80px] custom-lg:text-[126px] font-medium font-hara">Experience</span>
    <div className="rounded-[85px] p-1 bg-orange-300 w-40 md:w-80 hidden md:block"></div>
    </div>

    <div className="flex flex-row gap-3">
    <span className="text-[40px] custom-sm:text-[60px] md:text-[80px] custom-lg:text-[126px] font-medium font-hara">Divine{" "}</span>
    <div className="rounded-[85px] p-1 bg-orange-300 w-40 md:w-80 hidden md:block"></div>
    <span className="text-[40px] custom-sm:text-[60px] md:text-[80px] custom-lg:text-[126px] font-medium font-hara">Bliss At</span>
    </div>

    <div className="flex flex-row ">
    <span className="text-[40px] custom-sm:text-[60px] md:text-[80px] custom-lg:text-[126px] font-medium font-hara">ISKCON HAZARIBAGH</span>
   
    </div>
    </div>
    <div className="flex flex-col gap-5 w-full md:w-[80%] items-center justify-center md:items-end md:justify-end">
    <div className="flex flex-col gap-3 ml-10 md:mr-12">
    <span className="flex flex-col">
    <p className=" text-sm md:text-md custom-lg:text-lg font-medium text-gray-500 text-center lg:text-left">Join Us in Celebrating Love, Devotion,  and Peace </p>
    <p className=" text-sm md:text-md custom-lg:text-lg font-medium text-gray-500 text-center lg:text-left">in the Heart of Hazaribagh </p>
    </span>
    
      <div className="flex flex-row gap-4 items-center justify-center md:items-start md:justify-start">
      <button className="rounded-md p-2.5 font-medium text-sm text-white bg-gray-800">Explore</button>
      <button className="rounded-md p-2 font-medium text-sm text-orange-600 border-2 border-orange-600 ">Donate</button>
      </div>

    </div>
      
    </div>
  </div>
    <AboutUs/>
    <People/>
    <Footer/>
    </>
  );
}
