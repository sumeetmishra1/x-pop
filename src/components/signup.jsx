import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const [isAgency, setIsAgency] = useState("yes");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-6 w-full">
      <div className=" md:max-w-xs w-full flex flex-col justify-between min-h-[94vh] ">
        <div>
          <h2 className="text-[28px] font-bold text-[#1D2226] mb-8 leading-tight">
            Create Your
            <br />
            PopX account
          </h2>

          <div className="flex flex-col gap-4">
            <div className="mb-4 relative">
              <label className=" absolute -top-2 left-4 bg-[#F7F8F9] px-2 text-xs font-medium text-purple-600 mb-1 block">
                Full Name <span className="text-[#DD4A3D]">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Full Name*"
                className="w-full px-3 py-3 text-sm border bg-[#F7F8F9] border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4 relative">
              <label className=" absolute -top-2 left-4 bg-[#F7F8F9] px-2 text-xs font-medium text-purple-600 mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full px-3 py-3 text-sm border bg-[#F7F8F9] border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4 relative">
              <label className=" absolute -top-2 left-4 bg-[#F7F8F9] px-2 text-xs font-medium text-purple-600 mb-1 block">
                Phone number <span className="text-[#DD4A3D]">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Phone number*"
                className="w-full px-3 py-3 text-sm border bg-[#F7F8F9] border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4 relative">
              <label className=" absolute -top-2 left-4 bg-[#F7F8F9] px-2 text-xs font-medium text-purple-600 mb-1 block">
                Password <span className="text-[#DD4A3D]">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Password"
                className="w-full px-3 py-3 text-sm border bg-[#F7F8F9] border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4 relative">
              <label className=" absolute -top-2 left-4 bg-[#F7F8F9] px-2 text-xs font-medium text-purple-600 mb-1 block">
                Company name <span className="text-[#DD4A3D]">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Company name"
                className="w-full px-3 py-3 text-sm border bg-[#F7F8F9] border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-purple-600"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label className="text-sm font-semibold text-gray-800">
                Are you an Agency?<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    checked={isAgency === "yes"}
                    onChange={() => setIsAgency("yes")}
                    className="accent-purple-600 w-4 h-4"
                  />
                  <span className="text-gray-700 text-sm font-medium">Yes</span>
                </label>
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    checked={isAgency === "no"}
                    onChange={() => setIsAgency("no")}
                    className="accent-purple-600 w-4 h-4"
                  />
                  <span className="text-gray-700 text-sm font-medium">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button 
           onClick={() => navigate('/account')}
           className="w-full bg-[#6C25FF] text-white py-3  rounded-md mb-3 hover:bg-blue-700">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
