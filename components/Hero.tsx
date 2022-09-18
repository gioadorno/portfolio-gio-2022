import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    title: String,
    section: any
}

type APIProps = {
    pageInfo: PageInfo
}

const SectionButton = ({ title, section }: Props) => (
    <Link href={section}>
        <button className='heroButton'>
            {title}
        </button>
    </Link>
)

const Hero = ({ pageInfo }: APIProps) => {
    const [ text, count ] = useTypewriter({
        words: [`${pageInfo?.name}`, "Developer", "Designer", "Creator", "Innovator"],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image 
        className='relative rounded-full h-40 w-40 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()} 
        layout='fixed' 
        width='150px'
        height='150px'
        alt='Giovanni Adorno' />
        <div className='z-20'>
            <h2 className='text-md uppcase text-orange-300 opacity-50 pb-2 tracking-[10px]'>{pageInfo?.role}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>

            <div className='pt-5'>
                <SectionButton section='#about' title='About' />
                <SectionButton section='#experience' title='Experience' />
                <SectionButton section='#skills' title='Skills' />
                <SectionButton section='#projects' title='Projects' />
            </div>
        </div>
    </div>
  )
}

export default Hero