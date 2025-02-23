import React from 'react';
import Image from 'next/image';

function Page() {
  const imageSources = [
    '/assets/krishna.png',
    '/assets/1.jpg', '/assets/2.jpg', '/assets/3.jpg', '/assets/4.jpg',
    '/assets/5.jpg', '/assets/6.jpg', '/assets/7.jpg', '/assets/8.jpg',
    '/assets/9.jpg', '/assets/10.jpg', '/assets/11.jpg', '/assets/12.jpg',
    '/assets/13.jpg', '/assets/14.jpg', '/assets/15.jpg', '/assets/16.jpg',
    '/assets/17.jpg'
  ];

  return (
    <div className="bg-orange-custom p-10 custom-lg:p-12">
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
        {imageSources.map((src, index) => (
          <div key={index} className="mb-6 break-inside-avoid">
            <Image src={src} layout="intrinsic" width={320} height={170} alt={`Image ${index + 1}`} className="rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
