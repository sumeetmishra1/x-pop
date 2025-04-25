import React from 'react';
import { useNavigate } from 'react-router';

const SignIn = () => {

    const navigate  = useNavigate();
  return (
    <div className="min-h-screen p-6 w-full">
      <div className=" md:max-w-xs w-full ">
        <h2 className="text-[28px] font-bold text-[#1D2226] mb-2 leading-tight">
          Signin to your<br />PopX account
        </h2>
        <p className="text-base text-black w-64 opacity-60 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mb-4 relative" >
          <label className=" absolute -top-2 left-4 bg-[#F7F8F9] px-2 text-xs font-medium text-purple-600 mb-1 block">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-3 py-3 text-sm border bg-[#F7F8F9] border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-purple-600"
          />
        </div>

        <div className="mb-5 relative">
          <label className=" absolute -top-2 left-6 bg-[#F7F8F9] text-xs font-medium text-purple-600 mb-1 block">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-3 py-3 text-sm border bg-[#F7F8F9] border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-purple-600"
          />
        </div>

        <button
  
        onClick={() => navigate('/account')}
          className="w-full bg-gray-300 text-white text-sm font-semibold py-3 rounded-md cursor-not-allowed"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
