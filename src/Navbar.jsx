import React from 'react';
import logo from '../assets/raviKumarLogo.webp';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="https://harshit-sharma14.github.io/My-Portfolio/" className='text-2xl font-bold font-serif' aria-label='Home'>Portfoilio
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-4xl'>
        <a href="https://linkedin.com/in/harshit-sharma-9885b7249" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'>
        <FaLinkedin className="transition duration-300 hover:text-blue-500 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50" />
        </a>
        <a href="https://github.com/harshit-sharma14" target="_blank" rel="noopener noreferrer" aria-label='GitHub'>
          <FaGithub  className='transition duration-300 hover:text-yellow-500 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50' />
        </a>
        <a href="https://www.instagram.com/_harshitsharma14/" className='transition duration-300 hover:text-red-500 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50' target="_blank" rel="noopener noreferrer" aria-label='Instagram'>
          <FaInstagram />
        </a>
        
      </div>
    </nav>
  );
};
