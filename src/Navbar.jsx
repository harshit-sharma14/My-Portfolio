import React from 'react';
import logo from '../assets/raviKumarLogo.webp';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home'>
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://linkedin.com/in/harshit-sharma-9885b7249" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'>
          <FaLinkedin />
        </a>
        <a href="https://github.com/harshit-sharma14" target="_blank" rel="noopener noreferrer" aria-label='GitHub'>
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_harshitsharma14/" target="_blank" rel="noopener noreferrer" aria-label='Instagram'>
          <FaInstagram />
        </a>
        
      </div>
    </nav>
  );
};
