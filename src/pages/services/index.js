import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';
import ServiceSlider from '@/components/ServiceSlider';
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-32 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-[35px] leading-tight md:text-[54px] md:leading-[1.3] mb-4 font-semibold xl:mt-8'
            >
              My Services<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='leading-[1.8] text-white/60 font-light mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              I specialize in crafting bespoke web solutions tailored to your
              unique needs. My approach combines creative design with functional
              development, ensuring responsive, user-friendly, and SEO-optimized
              websites that drive user engagement and business growth.
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
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
