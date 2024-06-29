import React from 'react';
import MatrixBackground from './MatrixBackground';

const Contact = () => {
  return (
    <div className="relative h-screen flex items-center justify-center" style={{width:'95%'}} id='contact'>
      <MatrixBackground />
      <div className="relative z-10 p-8 bg-black bg-opacity-70 rounded-md text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded-md" rows="4"></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
