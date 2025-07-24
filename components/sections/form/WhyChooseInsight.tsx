'use client';

import React from 'react';

const points = [
  {
    text: 'Study in top countries like the',
    highlight: 'UK, USA, Germany, Australia, and more.',
  },
  {
    text: 'Get complete guidance from',
    highlight: 'course selection to visa approval.',
  },
  {
    text: 'Access a wide range of',
    highlight: 'ranked universities and diverse programs.',
  },
  {
    text: 'We offer tailored advice based on your',
    highlight: 'career goals and preferences.',
  },
  {
    text: 'Known for our',
    highlight: 'professionalism, clarity, and strong parent involvement.',
  },
  {
    text: 'We provide expert',
    highlight: 'English training to boost your readiness.',
  },
];

export default function WhyChoose() {
  return (
    <section
      id='why-choose'
      className='w-full px-6 py-24 md:px-20 bg-gradient-to-b from-slate-50 to-white'
    >
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-16 leading-tight'>
          Why choose <span className='text-red-600'>Insight Abroad Services</span>?
        </h2>

        <div className='grid gap-8 md:grid-cols-2 text-left text-base md:text-lg'>
          {points.map((item, i) => (
            <div
              key={i}
              className='bg-white p-6 md:p-7 rounded-2xl shadow-md border-l-4 border-red-600 relative overflow-hidden hover:shadow-xl transition duration-300'
            >
              <div className='flex items-start gap-3'>
                <svg
                  className='w-6 h-6 text-red-600 shrink-0 mt-1'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={3}
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                </svg>
                <p className='text-slate-800 font-medium leading-relaxed'>
                  {item.text} <span className='text-red-600 font-semibold'>{item.highlight}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
