import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full h-[8vh] flex justify-between items-center border-t-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4">
      <div className="text-gray-900 dark:text-white font-bold text-lg">
        ©TaskQue
      </div>
      <div className="flex flex-row gap-4">
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='h-8 w-8 rounded-md text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-center items-center'>
          <Facebook className='h-6 w-6' />
        </a>
        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='h-8 w-8 rounded-md text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-center items-center'>
          <Twitter className='h-6 w-6' />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='h-8 w-8 rounded-md text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-center items-center'>
          <Instagram className='h-6 w-6' />
        </a>
        <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='h-8 w-8 rounded-md text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-center items-center'>
          <Linkedin className='h-6 w-6' />
        </a>
      </div>
    </div>
  );
}

export default Footer;