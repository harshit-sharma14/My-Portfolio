import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_gwyix8g', // Replace with your EmailJS Service ID
        'template_ufo19fb', // Replace with your EmailJS Template ID
        form,
        'rbevIDlIU--wqMqXq' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          setStatus('Message failed to send. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-[60vh] w-full bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h2 className="text-center text-4xl tracking-tighter lg:text-5xl mb-8">
        Contact Me
      </h2>
      <div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-8">
        {/* Social Media Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h2 className="text-3xl text-center mb-4">Get in Touch with Me</h2>
          <h3 className="text-2xl text-center mb-6">
            via <span className="text-yellow-600">Social Media</span>
          </h3>
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/harshit-sharma14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-5xl transition-transform duration-300 hover:text-yellow-600 cursor-pointer hover:scale-110" />
            </a>
            <a
              href="https://instagram.com/_harshitsharma14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-5xl transition-transform duration-300 hover:text-red-600 cursor-pointer hover:scale-110" />
            </a>
            <a
              href="https://linkedin.com/in/harshit-sharma-9885b7249"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-5xl transition-transform duration-300 hover:text-blue-600 cursor-pointer hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Email Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h2 className="text-3xl mb-4">
            Send an <span className="text-yellow-500">E-Mail</span>
          </h2>
          <form
            className="w-full max-w-md flex flex-col space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none"
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="p-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-500 transition-all"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes('successfully') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
