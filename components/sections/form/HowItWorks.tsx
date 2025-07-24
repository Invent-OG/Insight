'use client';

import React from 'react';
import { MdCalendarToday, MdSupport, MdOutlineAssignmentTurnedIn } from 'react-icons/md';

interface CardProps {
  title: string;
  logo: React.ReactNode;
}

function Card({ title, logo }: CardProps) {
  return (
    <div className='flex items-center gap-4 bg-white text-black p-6 rounded-2xl border border-gray-200 shadow-md'>
      <div className='min-w-[52px] min-h-[52px] flex items-center justify-center rounded-full bg-red-600 text-white text-2xl'>
        {logo}
      </div>
      <p className='text-base font-semibold'>{title}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className='bg-white py-12 px-6 md:px-20'>
      <h2 className='text-2xl md:text-4xl font-bold text-center mb-10'>How it works</h2>
      <div className='space-y-6'>
        <div className='border-x-2 border-red-600 rounded-2xl p-6 flex items-center bg-white text-black shadow-md'>
          <div className='min-w-[52px] min-h-[52px] flex items-center justify-center rounded-full bg-white border-2 border-red-600 text-red-600 text-2xl mr-4'>
            <MdCalendarToday />
          </div>
          <p className='text-base font-semibold'>Book a Free consultation</p>
        </div>
        <div className='border-x-2 border-red-600 rounded-2xl p-6 flex items-center bg-white text-black shadow-md'>
          <div className='min-w-[52px] min-h-[52px] flex items-center justify-center rounded-full bg-white border-2 border-red-600 text-red-600 text-2xl mr-4'>
            <MdSupport />
          </div>
          <p className='text-base font-semibold'>Receive Personalized Support</p>
        </div>
        <div className='border-x-2 border-red-600 rounded-2xl p-6 flex items-center bg-white text-black shadow-md'>
          <div className='min-w-[52px] min-h-[52px] flex items-center justify-center rounded-full bg-white border-2 border-red-600 text-red-600 text-2xl mr-4'>
            <MdOutlineAssignmentTurnedIn />
          </div>
          <p className='text-base font-semibold'>Get end-to-end Guidance</p>
        </div>
      </div>
    </section>
  );
}
