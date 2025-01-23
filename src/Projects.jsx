import React from 'react'
import photo1 from '../assets/projects/project-1.webp'
import photo2 from '../assets/projects/project-2.webp'
import {motion} from 'framer-motion'
export const Projects = () => {
  return (
    <div className='pb-4'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5 }} className='my-20 text-center text-4xl'>Projects</motion.h2>
    <div>
        {/* <div className='mb-8 flex flex-wrap lg:justify-center'>


            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
            <img src={photo2} width={250} height={250} className='mb-6 rounded' alt="" />
            </motion.div>
            <div className=' h-auto max-w-full lg:w-3/4'>
            <h3 className='mb-2 font-semibold text-2xl'>Hotel Booking Website</h3>
            <p className='mb-4 text-stone-400 '>This hotel website clone is built using the MERN stack (MongoDB, Express.js, React, Node.js). It features a responsive design, dynamic room listings, secure user authentication, and an intuitive booking system, showcasing modern web development techniques.
</p>
            <button className='m-2 rounded bg-stone-900 p-2 text-sm font-medium w-auto  text-stone-300'>React.js</button>
            <button className='m-2 px-2 text-center w-auto rounded bg-stone-900 p-2  text-sm font-medium   text-stone-300'>Tailwind CSS</button>
            <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium   text-stone-300'>MongoDB</span>
            <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium   text-stone-300'>Nodejs</span>
            <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium  text-stone-300'>Express</span>
            
            </div>
        </div> */}
        <div className='mb-8 flex flex-wrap lg:justify-center'>


<motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
    <img src={photo2} width={250} height={250} className='mb-6 rounded' alt="" />
    </motion.div>
    <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className='w-full max-w-xl lg:w-3/4'>
    <h3 className='mb-2 font-semibold text-2xl'>StayEase: A MERN Stack Hotel Booking Platform
    </h3>
    <p className='mb-4 text-stone-400'>This hotel website clone is built using the MERN stack (MongoDB, Express.js, React, Node.js). It features a responsive design, dynamic room listings, secure user authentication, and an intuitive booking system, showcasing modern web development techniques.</p>
    <button className='m-2 rounded bg-stone-900 p-2 text-sm font-medium w-auto  text-stone-300'>React.js</button>
            <button className='m-2 px-2 text-center w-auto rounded bg-stone-900 p-2  text-sm font-medium   text-stone-300'>Tailwind CSS</button>
            <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium   text-stone-300'>MongoDB</span>
            <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium   text-stone-300'>Nodejs</span>
            <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium  text-stone-300'>Express</span>
            
    
    
    </motion.div>
</div>

        <div className='mb-8 flex flex-wrap lg:justify-center'>


        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
            <img src={photo1} width={250} height={250} className='mb-6 rounded' alt="" />
            </motion.div>
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className='w-full max-w-xl lg:w-3/4'>
            <h3 className='mb-2 font-semibold text-2xl'>TV Show Finder Website</h3>
            <p className='mb-4 text-stone-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus cumque nam quia unde voluptates ipsum beatae, similique aliquam? Dolor nostrum, culpa nisi unde quibusdam voluptate suscipit impedit. Veritatis, ad perferendis!</p>
            <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>HTML</span>
            <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>JS</span>
            <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>API</span>
            
            
            </motion.div>
        </div>

    </div>
    
    
    </div>
    
  )
}
