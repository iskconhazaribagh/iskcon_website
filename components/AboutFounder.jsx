import React from 'react'
import Image from 'next/image'
import { haRa } from '@/app/layout'
function AboutFounder() {
  return (
    <div className='bg-orange-custom flex flex-col gap-20 lg:flex-row-reverse items-center justify-center p-12 md:p-24'>

      <Image src="/assets/founder.jpeg" alt="mandir" height={600} width={400}   className='rounded-[40px] shadow-xl shadow-orange-200'/>

      <div className={`w-[80%] lg:w-[45%] flex flex-col items-center justify-center gap-8 `}>
        <h1 className={`text-blue-600 font-semibold text-[40px] md:text-[56px] ${haRa.className}`}>About Founder</h1>
        <div className='font-semibold text-md text-center md:text-left flex flex-col gap-2'>
        <p>Founded by Srila Prabhupada way back in 1966, just one year after his arrival in the USA, within 12 years of his outreach, he created a wave of enthusiasm and a spiritual surge on the planet, turning the hippies into the "happies" in the Western world. Srila Prabhupada tirelessly traveled the globe 14 times, opening 108 ISKCON centers in his lifetime across 5 continents to spread enlightenment through Vedic wisdom.

Over 50 crore books have been distributed throughout the world, benefiting all of humanity. What Srila Prabhupada started in such a short time has now reached far and wide, even in remote locations around the world, bringing faith and hope.</p>
<p>To humanity, Srila Prabhupada taught that world peace is a possibility, and his teachings offer an enlightening way to bring love and harmony not only among humans. Srila Prabhupada envisioned a Vedic sustainable living model where people can grow their own food and live in harmony with nature. He himself started Vedic farm communities in the Western world and demonstrated how to live by the principle of "simple living, high thinking."</p>
<p>At ISKCON Hazaribagh, people find the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada unfolding in very beautiful ways. Children benefit from value education and Bhagavatam classes, which bring them to higher levels of mental wisdom, while entire families feel spiritually enlivened through festivals like Janmashtami, Gaura Purnima, and Ratha Yatra, as well as holy pilgrimages to dhams like Vrindavan, Mayapur, and Jagannath Puri.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutFounder
