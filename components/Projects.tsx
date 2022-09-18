import React from 'react';
import { motion } from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';

type Props = {
    projects: Project[];
}

const Projects = ({projects}: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-orange-300/70 text-2xl'>Projects</h3>

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-slate-300/20 scrollbar-thumb-[#e9bd5dc7] scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thin'>
        {projects?.map((project, i) => (
            <motion.div 
            initial={{ 
                opacity: 0,
             }}
             whileInView={{ 
                opacity: 1,
              }}
              transition={{
                duration: 2
              }}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
            key={i}
            >
                <Link href={project?.linkToBuild}>
                    <motion.img
                    initial={{
                        opacity: 0,
                        y: -300
                    }}
                    transition={{ duration: 2.25 }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{ once: true }}
                    src={urlFor(project?.image).url()} alt="" 
                    className='object-contain w-[1100px] h-[600px] cursor-pointer hover:brightness-90 hover:opacity-80'
                    />
                </Link>
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-orange-300/50 '>Case Study {i+1} of {projects.length}:</span> {project?.title}
                    </h4>

                <div className='flex items-center space-x-2 justify-center'>
                    {project?.technologies.map((technology, i) => (
                        <img className='h-10 w-10' key={technology._id} src={technology.image} />
                    ))}

                </div>

                    <p className='text-lg text-center md:text-left overflow-y-scroll scrollbar-track-slate-300/20 scrollbar-thumb-[#e9bd5dc7] scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thin'>
                        {project?.summary}
                    </p>
                </div>
            </motion.div>
        ))}
    </div>

        <div className='w-full absolute top-[30%] bg-gradient-to-l from-orange-200 to-orange-400 opacity-20 left-0 h-[500px] -skew-y-12 ' />
    </motion.div>
  )
}

export default Projects