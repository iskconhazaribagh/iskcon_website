import React from 'react'

function Page() {
  return (
    <div className='bg-orange-custom w-full flex flex-col items-center justify-center p-10 md:p-12'>
      {/* Desktop */}
      <div className='w-full hidden lg:flex lg:flex-row lg:gap-6'>
        {/* First column with a large box (takes 40% width) */}
        <div className='w-[40%] h-[600px] bg-blue-400 mb-6'>
        </div>
        {/* Second column with a grid of boxes with equal width */}
        <div className='w-[60%] grid grid-cols-2 gap-6'>
          <div className='rounded-[8px] bg-blue-400 h-[290px]'>Box 1</div>
          <div className='rounded-[8px] bg-blue-400 h-[290px]'>Box 2</div>
          <div className='rounded-[8px] bg-blue-400 h-[290px]'>Box 3</div>
          <div className='rounded-[8px] bg-blue-400 h-[290px]'>Box 4</div>
        </div>
      </div>

      {/* Responsive layout for screens below lg */}
      <div className='flex flex-row gap-6 items-center justify-start w-full lg:hidden'>
        <div className='rounded-[8px] bg-blue-400 h-[290px] w-[40%]'>Box 1</div>
        <div className='rounded-[8px] bg-blue-400 h-[290px] w-[40%]'>Box 2</div>
        <div className='rounded-[8px] bg-blue-400 h-[290px] w-[40%]'>Box 3</div>
      </div>

      <div className='flex flex-row gap-6 items-center justify-start w-full lg:hidden'>
        <div className='rounded-[8px] bg-blue-400 h-[290px]'>Box 1</div>
        <div className='rounded-[8px] bg-blue-400 h-[290px]'>Box 2</div>
        <div className='rounded-[8px] bg-blue-400 h-[290px]'>Box 3</div>
      </div>

      {/* Mobile */}
      <div className='flex flex-col lg:hidden gap-6 items-center justify-start w-full'>
        <div className='w-[90%] h-[300px] bg-blue-400 mb-6'>
        </div>
        <div className='rounded-[8px] bg-blue-400 h-[200px] w-[90%]'>Box 1</div>
        <div className='rounded-[8px] bg-blue-400 h-[200px] w-[90%]'>Box 2</div>
        <div className='rounded-[8px] bg-blue-400 h-[200px] w-[90%]'>Box 3</div>
        <div className='rounded-[8px] bg-blue-400 h-[200px] w-[90%]'>Box 4</div>
      </div>
    </div>
  )
}

export default Page;
