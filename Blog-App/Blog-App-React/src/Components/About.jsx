import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bgColor">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">About Us</h1>
      <div className='shadow-lg m-3 p-3 rounded-xl'>
        <p className="text-lg max-w-3xl text-center mb-6">
          Welcome to our ReactJS Blog! This platform is designed for passionate writers and readers to share and explore ideas, thoughts, and stories.
        </p>
        <p className="text-lg max-w-3xl text-center mb-6">
          All blogs are securely stored in your browser using <span className="font-medium text-blue-700">localStorage</span>, ensuring you can write, edit, and access them anytime without hassle.
        </p>
        <p className="text-lg max-w-3xl text-center mb-6">
          Happy blogging, and thank you for being a part of my journey!
        </p>
        <p className="text-lg max-w-3xl text-center">
          <span className="font-medium">Contact Me:</span> If you have questions or suggestions, feel free to reach out at <span className="text-blue-700 underline">raj.shekhar1@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
