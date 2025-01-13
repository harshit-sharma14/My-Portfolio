import React from 'react';
import logo from '../assets/raviKumarLogo.webp';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home'>
          <img src={logo} className='mx-2' width={50} height={33} alt="Ravi Kumar Logo" />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'>
          <FaLinkedin />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label='GitHub'>
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label='Instagram'>
          <FaInstagram />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label='Twitter'>
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};
