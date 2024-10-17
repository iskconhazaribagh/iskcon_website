import React from 'react';

function DonationModal({ isOpen, onClose, amt }) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-[#FF6000] text-white p-10 md:p-16  rounded-[16px] shadow-lg w-[80%] md:w-[55%] lg:w-[38%] text-center flex flex-col gap-5 items-start justify-start">
        <h1 className='font-semibold text-xl md:text-2xl'>Details</h1>
        {/*Info form */}
       <div className='flex flex-col gap-4 items-start justify-start w-full'>

       <div className='flex flex-col gap-2 items-start justify-start w-full'>
        <label>Name</label>
        <input type='text' placeholder='Name' className='p-2 w-full rounded-[8px] '/>
       </div>

       <div className='flex flex-col gap-2 items-start justify-start w-full'>
        <label>Email</label>
        <input type='text' placeholder='Email@example.com' className='p-2 w-full rounded-[8px] '/>
       </div>

       <div className='flex flex-col gap-2 items-start justify-start w-full'>
        <label>Full Postal Address</label>
        <input type='text' placeholder='Please mention Address along with PIN CODE,Post Office, District and State.' className='p-2 w-full rounded-[8px] h-10'/>
       </div>

       <div className='flex flex-col gap-2 items-start justify-start w-full'>
        <label>PAN number</label>
        <input type='text' placeholder='Optional (But for 80G tax benefit its Mandatory)' className='p-2 w-full rounded-[8px] '/>
       </div>

      <span className='flex items-center justify-between w-full'>
        <h1>Total{" "}(Tax incl.)</h1>
        <h1>Rs.{amt}</h1>
      </span>
       </div>
        
        {/*Payment button */}
        <button className='w-full p-5 text-orange-600 font-semibold text-xl text-center bg-white rounded-[40px]'>Proceed to Pay</button>
      </div>
    </div>
  );
}

export default DonationModal;
