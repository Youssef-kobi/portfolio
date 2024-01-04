import React from 'react';
import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    transform: 'translateX(0)'
  },
  animate: {
    transform: 'translateX(-100%)'
  },
  exit: {
    transform: 'translateX(0%)'
  }
}

const Transition = () => {
  return (
    <>
      <motion.div
        className='fixed top-0 left-0 bottom-0 h-screen w-screen z-30 bg-[#16142a]'
        initial='initial'
        variants={transitionVariants}
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className='fixed top-0 left-0 bottom-0 h-screen w-screen z-20 bg-[#992E3D]'
        initial='initial'
        variants={transitionVariants}
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className='fixed top-0 left-0 bottom-0 h-screen w-screen z-10 bg-[#503D4F]'
        initial='initial'
        variants={transitionVariants}
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
    </>
  )
}

export default Transition;
