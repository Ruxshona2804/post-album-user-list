import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-blue-700 text-white text-center p-6 mt-10">
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-xl hover:text-blue-500" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-xl hover:text-blue-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl hover:text-pink-500" />
        </a>
      </div>
    </footer>
  );
}

export default Footer