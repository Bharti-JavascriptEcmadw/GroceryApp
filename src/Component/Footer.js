import React from 'react';

import '../App.css'
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdAccessTime } from 'react-icons/md'; // Importing icons for address, email, and work hours

const Footer = () => {
  return (
    <div className="bg-black text-white p-9 text-center ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-center">
        <div className="flex flex-col space-y-6 items-center text-center ">
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <h2 className="text-lg font-bold">Marketplace Grocery</h2>
          </div>
          <div className="flex items-center">
            <MdLocationOn className="text-white mr-2" />
            <p className="text-sm">Address: 123 Grocery St, City</p>
          </div>
          <div className="flex items-center">
            <MdEmail className="text-white mr-2" />
            <p className="text-sm">Email: info@example.com</p>
          </div>
          <div className="flex items-center">
            <MdAccessTime className="text-white mr-2" />
            <p className="text-sm">Work Hours: 9 AM - 9 PM</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-4 md:mt-0">
          <h2 className="text-lg font-bold">Account</h2>
          <p className="text-sm">Wishlist</p>
          <p className="text-sm">Track Order</p>
          <p className="text-sm">Shipping Details</p>
        </div>

        <div className="flex flex-col space-y-4 mt-4 md:mt-0">
          <h2 className="text-lg font-bold">Useful Links</h2>
          <p className="text-sm">Privacy Policy</p>
          <p className="text-sm">Terms of Service</p>
          <p className="text-sm">FAQs</p>
        </div>

        <div className="flex flex-col space-y-4 mt-4 md:mt-0">
          <h2 className="text-lg font-bold">Help Center</h2>
          <p className="text-sm">Contact Us</p>
          <p className="text-sm">Support</p>
          <p className="text-sm">Feedback</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="text-sm">&copy; 2024 All Rights Reserved</p>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <FaFacebook className="h-5 w-5 text-white hover:text-blue-700" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="h-5 w-5 text-white hover:text-blue-700" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="h-5 w-5 text-white hover:text-blue-700" />
          </a>
          <a href="#" aria-label="WhatsApp">
            <FaWhatsapp className="h-5 w-5 text-white hover:text-blue-700" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
