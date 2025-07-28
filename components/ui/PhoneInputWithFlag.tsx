// components/PhoneInputWithFlag.tsx

'use client';

import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { Controller, Control } from 'react-hook-form';
import 'react-phone-input-2/lib/style.css';

interface Props {
  name: string;
  control: Control<any>;
  disabled?: boolean;
}

export default function PhoneInputWithFlag({ name, control, disabled }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'Phone number is required',
        validate: (value) => {
          const raw = value.replace(/\D/g, '');
          const isIndian = value.startsWith('91');
          if (isIndian && !/^[6-9]\d{9}$/.test(raw.slice(2))) {
            return 'Invalid Indian phone number';
          }
          if (!isIndian && raw.length < 6) {
            return 'Invalid phone number';
          }
          return true;
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <div className='flex flex-col gap-1'>
          <PhoneInput
            country={'in'}
            value={field.value}
            onChange={field.onChange}
            inputClass={`!w-full !px-4 !py-2 !rounded ${
              error ? '!border-red-500' : '!border-gray-300'
            }`}
            buttonClass='!border-gray-300'
            inputProps={{ name }}
            enableSearch
            countryCodeEditable={false}
            disabled={disabled}
          />
          {error && <p className='text-red-500 text-sm'>{error.message}</p>}
        </div>
      )}
    />
  );
}
