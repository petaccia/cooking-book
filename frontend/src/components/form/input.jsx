import React from 'react';

const Input = ({ id, label, type = 'text', register, error }) => {
  return (
    <div className="w-full md:w-1/2 px-4 mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register}
        className={`w-full p-2 border border-gray-300 rounded ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Input;
