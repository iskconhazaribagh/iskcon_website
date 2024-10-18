import React from 'react'
import Image from 'next/image';
function Page() {
  return (
    <>

      {/* Desktop */}
      <div className='bg-orange-custom w-full hidden custom-lg:flex custom-lg:flex-col items-center justify-center gap-4 p-12'>
      
      <div className='  flex flex-row gap-6 items-center justify-center'>
      {/*krishna */}
        
        <Image src="/assets/krishna.png" height={810} width={400} className='border-2 border-gray-700 p-5'/>
        
        <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-6'>
        <Image src="/assets/scenary.png" height={170} width={290} alt="pic"/>
        <Image src="/assets/scenary.png" height={170} width={290} alt="pic"/>
        </div>
        <div className='flex flex-row gap-6'>
        <Image src="/assets/scenary.png" height={170} width={290} alt="pic"/>
        <Image src="/assets/scenary.png" height={170} width={290} alt="pic"/>
        </div>
        </div>
      </div>
      <div className='flex flex-row gap-6 w-full items-center justify-center'>
        <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
        <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
        <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
        </div>

        <div className='flex flex-row gap-6 w-full items-center justify-center'>
        <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
        <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
        <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
        </div>
    </div>




    {/*Mobile */}

    <div className='bg-orange-custom w-full flex flex-col custom-lg:hidden items-center justify-center gap-4 p-10 '>
    <Image src="/assets/krishna.png" height={810} width={400} className='border-2 border-gray-700 p-5'/>

      <div className='flex flex-wrap gap-6 items-center justify-center'>
      <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
        <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
        <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
        <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
        <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
        <Image src="/assets/scenary.png" height={170} width={320} alt="pic"/>
      </div>
      </div>

    </>
    
  )
}

export default Page;
