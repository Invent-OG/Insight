'use client';

import { FaPhoneAlt } from 'react-icons/fa';
import { Button } from '../ui/button';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useCreateLead } from '@/lib/queries/leads';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const createLead = useCreateLead();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await createLead.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interest: formData.message,
      });

      toast.success('Message sent successfully!');
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className='bg-white text-black py-12 md:py-16 lg:py-10 px-6 flex justify-center flex-col gap-10'
      id='contact'
    >
      <Toaster position='top-right' reverseOrder={false} />

      {/* Centered Heading */}
      <div className='text-center max-w-2xl mx-auto'>
        <h4 className='uppercase text-sm lg:text-base tracking-[0.20em] text-primary font-bold text-shadow-sm'>
          — Say Hello —
        </h4>
        <h2 className='lg:text-4xl md:text-4xl text-2xl py-4 font-bold leading-tight lg:text-wrap text-nowrap'>
          Let Us Know Your Concern
          <br /> We Are <span className='text-primary'>Always Ready.</span>
        </h2>
      </div>

      {/* Grid Section */}
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        data-aos-delay='100'
        className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center'
      >
        {/* Left Side - Form */}
        <div>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <Input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              required
            />
            <div className='flex gap-4'>
              <Input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                required
              />
              <Input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Enter your Phone'
                required
              />
            </div>
            <Textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your message'
              rows={5}
              required
            />
            <Button
              className='bg-primary hover:bg-transparent hover:border hover:border-black hover:text-black  font-semibold text-white'
              type='submit'
              disabled={loading}
            >
              {loading ? 'Sending...' : '— Contact Now —'}
            </Button>
            {success && <p className='text-green-600 mt-2'>Message sent successfully!</p>}
          </form>
        </div>

        {/* Right Side - Info */}
        <div className='flex flex-col justify-center'>
          <h3 className='text-3xl md:text-4xl lg:text-4xl font-medium mb-2'>
            Let’s <span className='text-primary'>Talk</span>
          </h3>
          <p className='text-black mb-6'>
            Schedule a consultation to discuss your study abroad goals
          </p>

          <div className='flex items-center gap-4'>
            <div className='p-3 rounded-full border border-primary text-primary'>
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <span className='text-sm text-black'>Phone</span>
              <p className='text-lg font-medium text-primary'>+91 8270883451</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
