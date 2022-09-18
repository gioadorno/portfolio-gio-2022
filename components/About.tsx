import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-orange-400 opacity-60 text-2xl'>About</h3>

        <motion.img 
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        initial={{
            x: -200,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        viewport={{ 
            once: true
        }}
        transition={{
            duration: 2
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        />
        
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#f7ac0acc]'>little</span> background
            </h4>
            <p className='text-base'>
            {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}

export default About