import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((store) => store.user.user);

    return (
        <div className="bg-gray-100 min-h-screen p-4 mt-20">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md mt-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">My Profile</h1>
  
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h2>
            <p className="text-gray-600">
              <span className="font-bold">Name:</span> {user.name}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Mobile Number:</span> {user.mobileNumber}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Email:</span> {user.email}
            </p>
          </div>
        </div>
      </div>
  )
}

export default Profile