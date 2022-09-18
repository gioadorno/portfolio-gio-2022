import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
    socials: Social[]
}

const Header = ({ socials }: Props) => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center p-5'>
        <motion.div 
        className='flex flex-row items-center'
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.25
        }}
        >
            {/* Social Icons */}
            {socials?.map((social) => (
                <SocialIcon 
                key={social?._id}
                url={social?.url} 
                className='hover:scale-105 transform ease-in duration-200 hover:drop-shadow-lg cursor-pointer' 
                fgColor='orange' 
                bgColor='transparent'
                 />
            ))}
        </motion.div>

    <Link href='#contact'>
            <motion.div
            initial={{
                x: 500,
                opacity: 0.5,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.25
            }}
            className='flex flex-row items-center text-orange-500 cursor-pointer hover:animate-pulse'>
                <SocialIcon
                className='hover:scale-105 transform ease-in duration-200 hover:drop-shadow-lg cursor-pointer'
                network='email'
                fgColor='orange'
                bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-orange-300'>Get in touch</p>
            </motion.div>
    </Link>
    </header>
  )
}

export default Header