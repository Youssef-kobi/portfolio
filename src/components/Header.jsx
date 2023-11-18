import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Socials from './Socials'
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto' >
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden' className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-6' >
          {/* logo */}
          <Link className='flex items-end opacity-90' href={'/'}>
            <Image className='-mr-3 ' src={'/YLogo.svg'} width={40} height={48} alt='YLogo' priority />
            <Image className='mix-blend-color-dodge' src={'/logo.svg'} width={220} height={48} alt='Logo' priority />
          </Link>
          {/* socials */}
          <Socials />
        </motion.div>
      </div>
    </header>
  )
}

export default Header