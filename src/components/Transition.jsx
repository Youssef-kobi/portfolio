import React from 'react';
import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    opacity: 0,
    transform: 'translateX(100%)'
  },
  animate: {
    opacity: 1,
    transform: 'translateX(0%)'
  },
  exit: {
    opacity: 0,
    transform: 'translateX(100%)'
  }
}

const Transition = () => {
  return (
    <>
      <motion.div
        className='fixed top-0 left-0 h-screen w-screen z-30 bg-[#2e2257]'
        initial='initial'
        variants={transitionVariants}
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className='fixed top-0 left-0 h-screen w-screen z-20 bg-[#3b2d71]'
        initial='initial'
        variants={transitionVariants}
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className='fixed top-0 left-0 h-screen w-screen z-10 bg-[#4b3792]'
        initial='initial'
        variants={transitionVariants}
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
    </>
  );
}

export default Transition;
