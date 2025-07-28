"use client";
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

  const handleDonateClick = () => {
    if (amt === "rec") {
      handleModalOpen();
    } else {
      // For one-time donation, open Razorpay link in new tab
      window.open("https://axisbpayments.razorpay.com/ISKCONHazaribagh", "_blank");
    }
  };

  return (
    <div className="flex flex-row items-center justify-between w-[90%] lg:w-[55%]">
      <div className='flex flex-row justify-start items-center gap-5'>
        <Image
          src={image}
          alt="Donation"
          width={130}
          height={130}
          className={`rounded-lg bg-blue-500 shadow-xl p-3 ${amt === "rec" ? "bg-blue-400" : "bg-purple-400"}`}
        />
        <div className='flex flex-col items-start gap-4'>
          <span className="text-sm font-normal">
            <p className='font-bold text-xl md:text-2xl'>Frequency</p>
            <p className='font-normal text-md md:text-lg'>{frq}</p>
          </span>

          <button
            className='p-2 flex sm:hidden flex-row rounded-[20px] gap-1 items-center justify-between bg-orange-500 text-white cursor-pointer'
            onClick={handleDonateClick}
          >
            <p className='font-semibold text-sm'>Donate</p>
            <FaCirclePlay className='text-lg' />
          </button>
        </div>
      </div>

      <button
        className='p-2 hidden sm:flex flex-row rounded-[20px] gap-1 items-center justify-between bg-orange-500 text-white cursor-pointer'
        onClick={handleDonateClick}
      >
        <p className='font-semibold text-sm'>Donate</p>
        <FaCirclePlay className='text-xl' />
      </button>

      {/* Render the DonationModal component only if "rec" */}
      {amt === "rec" && (
        <DonationModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          amt={amt}
        />
      )}
    </div>
  );
}

export default DonationBox;
