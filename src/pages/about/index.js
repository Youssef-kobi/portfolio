import Avatar from '@/components/Avatar';
import Circles from '@/components/Circles';
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { useState } from 'react';
import CountUp from 'react-countup/';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNode,
  FaDocker,
  FaLinux,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiStrapi,
  SiFirebase,
  SiPhp,
  SiOpenai,
} from 'react-icons/si';

const aboutData = [
  {
    title: 'Skills',
    description: `
    A seasoned full-stack developer, My focus is on crafting SEO-optimized, user-centric web solutions that drive user engagement and business growth, with each project reflecting my commitment to quality and innovation.
  `,
    info: [
      {
        title: 'Web Development',
        icons: [
          { key: 'html', icon: <FaHtml5 />, title: 'HTML5' },
          { key: 'FaCss3', icon: <FaCss3 />, title: 'CSS3' },
          { key: 'FaJs', icon: <FaJs />, title: 'JavaScript' },
          { key: 'FaReact', icon: <FaReact />, title: 'React.js' },
          { key: 'SiNextdotjs', icon: <SiNextdotjs />, title: 'Next.js' },
          { key: 'SiPhp', icon: <SiPhp />, title: 'php' },
          { key: 'FaNode', icon: <FaNode />, title: 'Node.js' },
        ],
      },
      {
        title: 'Specialize Tools & platform ',
        icons: [
          { key: 'FaFirebase', icon: <SiFirebase />, title: 'Firebase' },
          { key: 'SiStrapi', icon: <SiStrapi />, title: 'Strapi' },
          { key: 'FaWordpress', icon: <FaWordpress />, title: 'WordPress' },
          { key: 'FaDocker', icon: <FaDocker />, title: 'Docker' },
          { key: 'FaLinux', icon: <FaLinux />, title: 'Linux' },
          { key: 'SiOpenai', icon: <SiOpenai />, title: 'Openai' },
        ],
      },
    ],
  },
  {
    title: 'Awards',
    description:
      'Recognitions and accolades received over the years, highlighting my commitment to excellence and innovation in web development.',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'Experience',
    description:
      'My web development journey, spanning self-learning to professional roles, reflects a relentless pursuit of technical excellence and innovative solutions.',
    info: [
      {
        title: 'Freelancer Web Developer',
        stage: '2019 - Present',
      },
      {
        title: 'Full Stack Web Developer - Vsight Maroc',
        stage: '2021 - 2022',
      },
      {
        title: 'Web Developer - SMARTYPOS by Robinson',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'Credentials',
    description:
      'Educational qualifications and certifications that form the foundation of my technical knowledge and expertise in web development.',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Head>
        <title>About Me - My Professional Journey</title>
        <meta
          name='description'
          content='Learn about my professional journey, skills in web development and UI/UX design, work experience, and achievements in the industry.'
        />
        {/* Additional relevant meta tags */}
      </Head>

      <section className='h-full bg-primary/30 py-32 text-center xl:text-left'>
        <Circles />
        <motion.aside
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex absolute bottom-0 -left-[370px]'
        >
          <Avatar />
        </motion.aside>
        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
          {/* text */}
          <article className='flex flex-col justify-center'>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-[35px] leading-tight md:text-[54px] md:leading-[1.3] mb-4 font-semibold'
            >
              Where <span className='text-accent'>Vision</span> <br /> Meets{' '}
              <span className='text-accent'>Innovation</span>
            </motion.h2>

            <motion.p
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='leading-[1.8] text-white/60 font-light max-w-[500px] mx-auto xl:mx-0 mb-8  xl:mb-12 px-2 xl:px-0'
            >
              Over the past five years as a freelance developer, I&apos;ve
              collaborated with agencies, advised startups, and crafted digital
              products for various businesses, sharpening my proficiency in
              React.js, Next.js, and other leading web technologies.
            </motion.p>
            {/* counter */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
            >
              <div className='flex flex-1 xl:gap-x-6'>
                {/* experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className=' text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={5} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Years of Experience
                  </div>
                </div>
                {/* clients */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className=' text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={30} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Satisfied Client
                  </div>
                </div>
                {/* projects */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className=' text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={100} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Finished Projects
                  </div>
                </div>
                {/* Awards */}
                <div className='relative flex-1 '>
                  <div className=' text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={4} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Winning Awards
                  </div>
                </div>
              </div>
            </motion.div>
          </article>
          {/* Info */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col w-full xl:max-w-[48%] h-[380px]'
          >
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((el, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={` ${
                      index === itemIndex &&
                      `text-accent after:w-[100%] after:!bg-accent after:transition-all after:duration-300 `
                    }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {el.title}
                  </div>
                );
              })}
            </div>
            <div className=' py-2 xl:py-6 flex flex-col gap-y-2 mb-8 xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                  >
                    {/* title */}
                    <div className='font-light mb-0 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'>-</div>
                    <div className='text-xs'>{item.stage}</div>

                    <div className='flex gap-x-4'>
                      {/* icons */}
                      {item.icons?.map((icon) => {
                        return (
                          <div
                            // title={icon.title}
                            className='text-2xl text-white relative group hover:scale-120'
                            key={icon.key}
                          >
                            <div className='absolute pb-8 pr-8 left-0 bottom-0 hidden group-hover:flex'>
                              <div className='bg-white border relative flex text-primary items-center p-[6px] rounded-sm'>
                                <div className='text-[12px] leading-none font-semibold capitalize'>
                                  {icon.title}{' '}
                                  {/* Assuming icon.key is the title */}
                                </div>
                                {/* <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div> */}
                              </div>
                            </div>
                            {icon.icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Description
            <div className='flex-1'>
              <motion.p
                variants={fadeIn('left', 0.6)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='leading-[1.8] text-white/60 font-light  mx-auto xl:mx-0  xl:mt-12 px-2 xl:px-0 xl:py-6'
              >
                {aboutData[index].description}
              </motion.p>
            </div> */}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
