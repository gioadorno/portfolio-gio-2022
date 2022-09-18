import { motion } from 'framer-motion'
import React from 'react'
import { Skill } from '../typings'

type Props = {
    directionLeft?: boolean
    skill: Skill;
}

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className='group relative flex cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>
        <motion.img 
        initial={{
        x: directionLeft ? -200: 200,
        opacity: 0
        }}
        transition={{ duration: 1.25 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skill.image}
        className='rounded-full border border-gray-500 object-scale-down w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:brightness-[35%] group-hover:blur-[1px] group-hover:border-orange-500 group-hover:border-opacity-50 group-hover:scale-110 transition duration-300 ease-in-out'
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition h-24 md:w-28 md:h-28  duration-300 ease-in-out rounded-full group-hover:bg-[#00000031] group-hover:scale-110 h-24-w-24 xl:w-32 xl:h-32 z-0'>
            <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-xl font-bold text-white opacity-100'>
                    {skill.progress}%
                </p>
                <p className='text-sm text-center text-white'>{skill.title}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill