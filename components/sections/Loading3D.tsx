// components/Loading.jsx
'use client';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-white'>
      {/* Logo with a rotating ring */}
      <div className='relative flex items-center justify-center'>
        <div className='absolute w-24 h-24 border-t-4 border-b-4 border-red-500 rounded-full animate-spin'></div>
        <Image
          src='/assets/logo.png'
          alt='Insight Logo'
          width={64}
          height={64}
          priority // Ensures it's preloaded
          className='z-10'
          onError={() => console.error('Logo failed to load')}
        />
      </div>

      {/* Company Name with gradient shimmer */}
      <h1 className='mt-6 text-3xl font-eurostile text-transparent bg-black bg-clip-text animate-pulse'>
        Loading...
      </h1>
    </div>
  );
}
