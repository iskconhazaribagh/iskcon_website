import React from 'react'
import Image from 'next/image'
import { haRa } from '@/app/layout'
function People() {
  return (
    <div className='bg-orange-custom flex flex-col gap-6 items-start justify-start  p-12 md:p-20 '>
        <h1 className={`text-blue-600 font-semibold text-[40px] md:text-[56px] ${haRa.className}`}>People</h1>
        <div className='flex flex-col gap-6 sm:flex-row items-center md:items-start justify-center md:justify-between w-[90%] mt-4'>
    {/*Person 1 */}
    <div className='flex flex-col gap-2 items-center justify-center'>
    <div className='p-3 border-4 border-dashed border-orange-600 rounded-full'>
    <div className='object-cover rounded-full'>
        <Image src="/assets/bunny.jpg" alt="pic" height={150} width={150} className='rounded-full' />
    </div>
    </div>
    <p className='font-semibold'>Prabhu</p>
    </div>
    {/*Person 2 */}
    <div className='flex flex-col gap-2 items-center justify-center'>
    <div className='p-3 border-4 border-dashed border-orange-600 rounded-full'>
    <div className='object-cover rounded-full'>
        <Image src="/assets/bunny.jpg" alt="pic" height={150} width={150} className='rounded-full' />
    </div>
    </div>
    <p className='font-semibold'>Prabhu</p>
    </div>

    {/*Person 3 */}
    <div className='flex flex-col gap-2 items-center justify-center'>
    <div className='p-3 border-4 border-dashed border-orange-600 rounded-full'>
    <div className='object-cover rounded-full'>
        <Image src="/assets/bunny.jpg" alt="pic" height={150} width={150} className='rounded-full' />
    </div>
    </div>
    <p className='font-semibold'>Prabhu</p>
    </div>
     </div>
    </div>
  )
}

export default People
