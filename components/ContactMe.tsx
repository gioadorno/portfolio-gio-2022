import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  };

type Props = {}

const ContactMe = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:adorno.gio@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };
  return (
    <motion.div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-orange-300/70 text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Let me turn your dreams into reality.{" "}
                <span className='underline decoration-orange-300/50'>Lets talk.</span>
            </h4>

            <div>
                <div className='flex items-center space-x-5 mt-5 justify-center'>
                    <EnvelopeIcon className='text-orange-500 h-7 w-7 animate-pulse' />
                    <a href='mailto:adorno.gio@gmail.com' className='text-2xl hover:text-orange-300 hover:underline hover:decoration-orange-400/40'>adorno.gio@gmail.com</a>
                </div>
                <div className='flex items-center space-x-5 mt-4 justify-center'>
                    <MapPinIcon className='text-orange-500 h-7 w-7 animate-pulse' />
                    <p className='text-2xl cursor-default'>Chandler, AZ</p>
                </div>

                <form onSubmit={handleSubmit((onSubmit))} className='flex flex-col space-y-2 w-fit mx-auto mt-10'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                        <textarea {...register('message')} placeholder='Message' className='contactInput' />
                        <button className='bg-orange-300/80 py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-orange-300 hover:border hover:border-orange-700' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </motion.div>
  )
}

export default ContactMe