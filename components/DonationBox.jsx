"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaIndianRupeeSign, FaCirclePlay } from "react-icons/fa6";
import DonationModal from './DonationModal';
function DonationBox({ image, amt, frq }) {
  const [isModalOpen, setModalOpen] = useState(false); 

  const handleModalOpen = () => {
    setModalOpen(true);  
  };

  const handleModalClose = () => {
    setModalOpen(false);  
  };

  return (
    <div className="flex flex-row items-center justify-between w-[80%] md:w-[40%]">
      <div className='flex flex-row justify-start items-center gap-5'>
        <Image
          src={image}
          alt="Donation"
          width={140}
          height={140}
          className="rounded-lg bg-blue-500 shadow-xl p-5"
        />
        <div className='flex flex-col items-start'>
          <span className="font-semibold mb-2 flex items-center">
            <FaIndianRupeeSign className='text-lg' />
            <p className='text-xl'>{amt}</p>
          </span>
          <p className="text-sm font-normal">Frequency {frq}</p>
        </div>
      </div>
      <FaCirclePlay 
        className='text-orange-600 text-2xl mr-4 cursor-pointer' 
        onClick={handleModalOpen}  // Open modal on click
      />

      {/* Render the DonationModal component */}
      <DonationModal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        amt={amt} 
      />
    </div>
  );
}

export default DonationBox;
