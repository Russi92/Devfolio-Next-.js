import Image from 'next/image';
import React from 'react'
import { FaGithub , FaLinkedin , FaFacebook , FaInstagram} from "react-icons/fa";
import Link from 'next/link';


const Hero = () => {
  return (
    <div className="py-28 container max-w-7xl mx-auto px-4">
      <div className='max-w-3xl mx-auto text-center'>
        <div className='flex flex-col items-center mb-4'>
          <Image src="/my-pic.jpeg" alt='profile image' width={100} height={100}
              className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary' />
        </div>

        <h1 className='text-4xl md:text-4xl font-bold mb-6'>Hi, I&apos;m <span className='text-primary'>Mohamed Hassan</span> </h1>

        <p className='mb-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300'>Web Developer | Front-End | React | Next.Js</p>

        <div className='flex justify-center space-x-4 mb-8'>
          <a href="https://github.com" target="_blank" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors 
          duration-300'>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mohamedhassanfrontend/" target="_blank" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors 
          duration-300'>
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/mohamed.nedved.52/" target="_blank" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors 
          duration-300'>
            <FaFacebook />
          </a>
          <a href="/" target="_blank" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors 
          duration-300'>
            <FaInstagram />
          </a>
        </div>

        <div className='flex flex-col md:flex-row gap-4 justify-center'>
          <Link href="/projects" 
          className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/70 transition-colors font-semibold
          hover:shadow-lg'>
            View Projects
          </Link>

          <Link href="/contact" 
          className='hover:text-gray-800 bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold
          hover:shadow-lg'>
            Contact Me
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Hero;