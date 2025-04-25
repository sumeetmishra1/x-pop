import React from 'react';

const AccountSettings = () => {
  return (
    <div className="w-full md:max-w-sm min-h-screen border border-gray-200 rounded-md shadow-sm overflow-hidden bg-[#F7F8F9]">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-4 py-3">
        <h2 className="text-sm font-semibold text-gray-800">Account Settings</h2>
      </div>

      {/* User Info */}
      <div className="p-4 space-y-3 mt-2">
        <div className="flex items-start space-x-6">
          <div className="relative">
            <img
              src="dp.png" 
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-purple-600 border-2 border-white">
                <img src="camera.png" alt="Camera" className="w-3 h-3" />
            </span>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900">Marry Doe</h3>
            <p className="text-xs text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Bio / Description */}
        <p className="text-xs text-gray-700 leading-5">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      {/* Divider for next section (optional) */}
      <div className="border-t border-dashed border-gray-300 h-[180px]"></div>
    </div>
  );
};

export default AccountSettings;
