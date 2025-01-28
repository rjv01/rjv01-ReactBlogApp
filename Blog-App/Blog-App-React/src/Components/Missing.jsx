import React from 'react';
import { Link } from 'react-router-dom';

export default function Missing() {
  return (
    <div className="min-h-screen flex flex-col justify-start m-5 p-5 items-center h-screen  text-white">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      {/* Message */}
      <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
      {/* Link */}
      <p>
        <Link
          to="/"
          className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          Visit our Home Page
        </Link>
      </p>
    </div>
  );
}
