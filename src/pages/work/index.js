import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';
import WorkSlider from '@/components/WorkSlider';
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import Head from 'next/head';

const Work = () => {
  return (
    <>
      <Head>
        <title>My Work - Portfolio of Web Development Projects</title>
        <meta
          name='description'
          content='Explore my portfolio to see a range of successful web development projects, including work in React.js, Next.js, and UI/UX design, demonstrating my expertise and creativity.'
        />
      </Head>

      <div className='h-full bg-primary/30 py-32 xl:pb-0 xl:flex xl:flex-col xl:justify-center text-center'>
        <Circles />
        <div className='container mx-auto xl:flex xl:flex-col xl:justify-center'>
          <div className='flex flex-col xl:flex-row gap-x-8'>
            {/* text */}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='text-[35px] leading-tight md:text-[54px] md:leading-[1.3] mb-4 font-semibold xl:mt-12 '
              >
                My Work<span className='text-accent'>.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='leading-[1.8] text-white/60 font-light mb-4 max-w-[400px] mx-auto lg:mx-0'
              >
                Discover a curated selection of my web development projects
                where creativity meets functionality. Each piece in my portfolio
                is a testament to my commitment to innovation, user experience,
                and technical excellence. From dynamic websites to scalable web
                applications, my work encapsulates the essence of modern web
                development.
              </motion.p>
            </div>
            {/* Slider */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='w-full xl:max-w-[65%]'
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Work;
