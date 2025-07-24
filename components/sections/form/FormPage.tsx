'use client';

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Phone, Mail } from 'lucide-react';
import { useCreateLead } from '@/lib/queries/leads';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function Formpage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
  });

  const { mutate, isPending, isSuccess, isError } = useCreateLead();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({ name: '', email: '', phone: '', interest: '' });
      toast.success('Inquiry submitted successfully!');
    }
    if (isError) {
      toast.error('Something went wrong. Please try again.');
    }
  }, [isSuccess, isError]);

  return (
    <main className='w-full min-h-screen bg-gray-200 flex items-center justify-center px-4 py-16'>
      <div className='max-w-2xl w-full'>
        <div
          style={{
            backgroundImage: `url('/assets/contact/tiny-grid.png')`,
            backgroundColor: '#fafafa',
            backgroundSize: 'auto',
          }}
          className='bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200 w-full'
        >
          <h2 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Get in Touch</h2>
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Name <span className='text-red-600'>*</span>
              </label>
              <Input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                disabled={isPending}
                required
                className='mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500'
                placeholder='Your Name'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email Address <span className='text-red-600'>*</span>
              </label>
              <Input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                disabled={isPending}
                required
                className='mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500'
                placeholder='you@example.com'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Phone Number <span className='text-red-600'>*</span>
              </label>
              <Input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                disabled={isPending}
                required
                className='mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500'
                placeholder='+91 00000 00000'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Interest <span className='text-red-600'>*</span>
              </label>
              <Textarea
                name='interest'
                value={formData.interest}
                onChange={handleChange}
                disabled={isPending}
                required
                rows={4}
                className='mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500'
                placeholder='Tell us your interest'
              />
            </div>

            <button
              type='submit'
              disabled={isPending}
              className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition duration-200'
            >
              {isPending ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>

          {/* Contact Info below form on all screen sizes */}
          <div className='space-y-4 mt-8'>
            <div className='flex items-center gap-2 text-gray-700'>
              <Phone className='text-red-600 w-5 h-5' />
              <span>
                <strong>Phone:</strong>{' '}
                <a href='tel:+918270883451' className='text-red-600'>
                  +91 82708 83451
                </a>
              </span>
            </div>
            <div className='flex items-center gap-2 text-gray-700'>
              <Mail className='text-red-600 w-5 h-5' />
              <span>
                <strong>Email:</strong>{' '}
                <a href='mailto:info@insightabroadservices.org' className='text-red-600'>
                  info@insightabroadservices.org
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Formpage;
