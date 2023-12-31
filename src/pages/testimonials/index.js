import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';
import TestimonialSlider from '@/components/TestimonialSlider';
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import Head from 'next/head';

const Testimonials = () => {
  return (
    <>
      <Head>
        <title>Testimonials - Client Feedback and Endorsements</title>
        <meta
          name='description'
          content='Discover what clients and colleagues say about my work in web development, my expertise in React.js, Next.js, and my commitment to delivering high-quality solutions.'
        />
      </Head>
      <div className='h-full bg-primary/30 py-32  text-center'>
        <Circles />
        <div className='container mx-auto h-full flex flex-col justify-center'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-[35px] leading-tight md:text-[54px] md:leading-[1.3] mb-8 font-semibold xl:mb-0 '
          >
            What clients<span className='text-accent'>.</span>
          </motion.h2>

          {/* Slider */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=''
          >
            <TestimonialSlider />
          </motion.div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Testimonials;
