import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {SiMongodb} from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'; // JavaScript Icon
import { FaCode } from 'react-icons/fa';       // General Programming Icon
import {motion} from 'framer-motion'
export const Tech = () => {
    const icon=(duration)=>({
        inital:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse",
            }

        }
    })
  return (
    <div className='pb-24'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}}  className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div initial="initial" animate="animate" variants={icon(2.5)}>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={icon(2.5)}      className='p-4'>
                <SiMongodb className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={icon(2.5)} className='p-4'>
                <SiJavascript className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={icon(2.5)} className='p-4'>
                <FaCode className='text-7xl text-yellow-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}
