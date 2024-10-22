import React from 'react';
import Image from 'next/image';
import { haRa } from '@/app/layout';

function Page() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-start justify-start bg-orange-custom w-full p-12 md:p-20'>
      {/* Festivals */}
      <div className='flex flex-col gap-4 w-full h-full mt-28 md:mt-0'>
        <h1 className={`text-blue-600 font-semibold text-[40px] md:text-[56px] ${haRa.className}`}>Festivals</h1>
        <div className='flex flex-col gap-6 lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full '>
          <div className='flex items-end justify-start w-[280px] md:w-[380px] lg:w-[400px] h-[400px] md:h-[450px] bg-purnima bg-cover bg-center rounded-[25px] shadow-lg'>
            <h1 className='text-white  text-2xl font-bold p-3 w-full text-center'>Guru Purnima</h1>
          </div>
          <div className='flex items-end justify-start w-[280px] md:w-[380px] lg:w-[400px] h-[400px] md:h-[450px] bg-janmashtami bg-cover bg-center rounded-[25px] shadow-lg'>
            <h1 className='text-black text-2xl font-bold p-3  w-full text-center'>Janmashtami</h1>
          </div>
          <div className='flex items-end justify-start w-[280px] md:w-[380px] lg:w-[400px] h-[400px] md:h-[450px] bg-rath bg-cover bg-center rounded-[25px] shadow-lg'>
            <h1 className='text-white text-2xl font-bold p-3  w-full text-center'>Rath Yatra</h1>
          </div>
        </div>
      </div>


      {/* Festivals */}
      <div className='flex flex-col gap-7 w-full h-full mt-12'>
        <h1 className={`text-blue-600 font-semibold text-[40px] md:text-[56px] ${haRa.className}`}>Yatras</h1>
        <div className='flex flex-col gap-6 lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full '>
          <div className='flex items-end justify-start w-[280px] md:w-[380px] lg:w-[400px] h-[400px] md:h-[450px] bg-orange-400 bg-cover bg-center rounded-[25px] shadow-lg'>
            <h1 className='text-white  text-2xl font-bold p-3 w-full text-center'>Vrindavan</h1>
          </div>
          <div className='flex items-end justify-start w-[280px] md:w-[380px] lg:w-[400px] h-[400px] md:h-[450px] bg-orange-400 bg-cover bg-center rounded-[25px] shadow-lg'>
            <h1 className='text-black text-2xl font-bold p-3  w-full text-center'>Mayapur</h1>
          </div>
          <div className='flex items-end justify-start w-[280px] md:w-[380px] lg:w-[400px] h-[400px] md:h-[450px] bg-orange-400 bg-cover bg-center rounded-[25px] shadow-lg'>
            <h1 className='text-white text-2xl font-bold p-3  w-full text-center'>Jaggantah Puri</h1>
          </div>
        </div>

        <div className='flex flex-col gap-6 lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full '>
          <div className='flex items-end justify-start w-[280px] md:w-[380px] lg:w-[400px] h-[400px] md:h-[450px] bg-orange-400 bg-cover bg-center rounded-[25px] shadow-lg'>
            <h1 className='text-white  text-2xl font-bold p-3 w-full text-center'>Mithila</h1>
          </div>
          <div className='flex items-end justify-start w-[280px] md:w-[380px] lg:w-[400px] h-[400px] md:h-[450px] bg-orange-400 bg-cover bg-center rounded-[25px] shadow-lg'>
            <h1 className='text-black text-2xl font-bold p-3  w-full text-center'>Chitrakut</h1>
          </div>
          <div className='flex items-end justify-start w-[280px] md:w-[380px] lg:w-[400px] h-[400px] md:h-[450px] bg-orange-400 bg-cover bg-center rounded-[25px] shadow-lg'>
            <h1 className='text-white text-2xl font-bold p-3  w-full text-center'>Ayodhya</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
