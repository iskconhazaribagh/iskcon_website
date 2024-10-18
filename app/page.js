import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import People from "@/components/People";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
  {/* <div className="bg-orange-custom flex flex-col items-center justify-center">

    <div className="flex flex-col items-center justify-center gap-3">
    <div className="flex flex-row gap-1">
    <span className="text-[150px] lg:text-[210px] font-geist-hara">Experience</span>
    <div className="rounded-[85px] p-5 bg-orange-300"></div>
    </div>

    <div className="flex flex-row gap-1">
    <span className="text-[150px] lg:text-[210px]">Divine{" "}</span>
    <div className="rounded-[85px] p-5 bg-orange-300"></div>
    <span className="text-[150px] lg:text-[210px]">Bliss At</span>
    </div>

    <div className="flex flex-row gap-1">
    <span className="text-[150px] lg:text-[210px] ">ISKON HAZARIBAGH</span>
   
    </div>
    </div>
    <div className="flex flex-col gap-5 w-full item-start jus md:items-end md:justify-end">
    <div className="flex flex-col gap-3 m-10">
    <span className="flex flex-col">
    <p className=" text-lg">Join Us in Celebrating Love, Devotion,  and Peace </p>
    <p className=" text-lg">in the Heart of Hazaribagh </p>
    </span>
    
      <div className="flex flex-row gap-4 mt-4">
      <button className="rounded-md p-3 text-white bg-gray-800">Explore</button>
      <button className="rounded-md p-3 text-orange-600 border-2 border-orange-600 ">Donate</button>
      </div>

    </div>
      
    </div>
  </div> */}
    <AboutUs/>
    <People/>
    <Footer/>
    </>
  );
}
