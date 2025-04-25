import React from 'react';
import { useNavigate } from 'react-router';

const Welcome = () => {
    const navigate  = useNavigate();
  return (
    <div className="min-h-screen bg-[#F7F8F9] flex items-end">
      <div className="p-6 rounded-lg  md:max-w-sm w-full">
        <h1 className="text-3xl font-bold  text-gray-900 mb-4 text-start">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6 text-start max-w-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button 
        onClick={() => navigate('/auth/signup')}
        className="w-full bg-[#6C25FF] text-white py-3  rounded-md mb-3 hover:bg-blue-700">
          Create Account
        </button>
        <button 
        onClick={() => navigate('/auth/signin')}
        className="w-full font-semibold text-[#1D2226] bg-[#6C25FF4B] py-3 rounded-md mb-3 hover:bg-[#6C25FF] hover:text-white">
        Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default  Welcome;
