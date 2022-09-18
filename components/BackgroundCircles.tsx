import React from 'react';
import { motion } from 'framer-motion' ;

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        scale: [1,2,2,3,1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
    }}
    transition={{
        duration: 3
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-sky-900 rounded-full h-[200px] w-[200px] mt-52 animate-ping duration-300 transform ease-in-out'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 '/>
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse' />
        <div className='absolute rounded-full border border-rose-200 opacity-25 h-[800px] w-[800px] mt-52 ' />
    </motion.div>
  )
}

export default BackgroundCircles