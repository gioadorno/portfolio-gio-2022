
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 '>
        <motion.div
        initial={{ 
            y: -100,
            opacity: 0
         }}
        whileInView={{
            y: 0,
            opacity: 1
        }}
        transition={{ 
            duration: 2
         }}
         viewport={{
            once: true
         }}
        className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center relative'
        >
            <Image src={urlFor(experience?.companyImage).url()} alt='' className='absolute rounded-md' layout='fill' />
            </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Engineer</h4>
            <p className='fot-bold text-2xl mt-1'>Valor Enterpries</p>
            <div className='flex space-x-2 my-2'>
                {experience?.technologies?.map((technology) => (
                    <img 
                        key={technology._id}
                        className='h-10 w-10 rounded-full'
                        src={urlFor(technology?.image).url()}
                    />
                ))}
                {/* Tech used */}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-transparent'>
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard