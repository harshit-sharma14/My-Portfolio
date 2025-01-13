import React from 'react'
import profilePic from './Hello1.png'
import {motion, stagger} from 'framer-motion'

export const Hero = () => {
  const container={
    hidden:{opacity:0,x:-100},
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:0.5,
        staggerChilderen:0.5,
      }
    }
  }
  const child={
    hidden:{opacity:0,x:-100},
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:0.5,
        
      }
    }
  }
  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
            <div className='flex justify-center items-center  lg:p-0'>
                <motion.img src={profilePic} className=' rounded-3xl bw-image'
                initial={{x:100, opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1.5}}
                width={500}
                height={500}
                alt="" /></div></div>

                <div className='w-full lg:w-1/2'>
                <motion.div initial="hidden" animate="visible" variants={container} className='flex flex-col items-center lg:items-start mt-10'>
                   <motion.h2 variants={child} className='pb-2 text-5xl tracking-tighter lg:text-8xl     '>Harshit Sharma</motion.h2>
                    <motion.span variants={child} data-text='Full Stack Developer' className='bg-gradient-to-r fullstack from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                    <motion.p variants={child} className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-center lg:text-left'> Dynamic and results-driven Computer Science & Engineering student with expertise in full-stack
 development and proficiency in C++ and Data Structures & Algorithms. Skilled in designing scalable
 web applications using the MERN stack, optimizing performance, and creating seamless user
 experiences. Adept at API integration, debugging, and building responsive designs. Actively
 seeking opportunities to leverage my skills in impactful projects.</motion.p>
                    <motion.a variants={child} href="/Resume1.pdf" target='_blank' rel='no' download className='bg-white rounded p-4 text-sm text-stone-800 mb-10 relative w-[10vw] h-[6vh] ani'>Download Resume</motion.a>
                    </motion.div>
                    </div>
        </div>
    </div>
  )
}
