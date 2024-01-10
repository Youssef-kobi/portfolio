import Head from 'next/head';
import { motion } from 'framer-motion';
import ProjectsBtn from '@/components/ProjectsBtn';
import Avatar from '@/components/Avatar';
import ParticlesContainer from '@/components/ParticlesContainer';
import { fadeIn } from '@/variants';

export default function Home() {
  return (
    <>
      <Head>
        <title>Youssef Elkobi: Creating Cutting-Edge Web Solutions</title>
        <meta
          name='description'
          content="Discover Youssef Elkobi's expertise in creating stunning, functional websites. Specializing in intuitive designs and robust development, I bring your digital vision to life with custom, user-friendly solutions."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='canonical' href='https://portfolio-youssef-kobi.vercel.app/' />
        {/* <script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "Youssef Elkobi",
  "url": "https://www.youssefelkobi.com",
  "sameAs": [
    "https://www.linkedin.com/in/youssefelkobi",
    "https://twitter.com/YoussefElkobi",
    "https://github.com/YoussefElkobi"
  ],
  "jobTitle": "Expert Web Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Independent Freelancer"
  }
}
</script> */}
      </Head>

      <section className='bg-primary/60 h-full'>
        <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <header className='text-center flex flex-col py-32 xl:pb-0 xl:justify-center xl:text-left h-full container mx-auto'>
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-4xl leading-tight md:text-6xl md:leading-snug mb-8 font-semibold'
            >
              Transforming <span className='text-accent'> Ideas </span>
              <br /> Into
              <span className='text-accent'> Digital Excellence</span>
            </motion.h1>

            <motion.p
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-1 swap'
            >
              Specializing in web development, I focus on turning your vision
              into exceptional digital experiences. My mastery in technologies
              like JavaScript, React.js, Next.js, Node.js, along with other
              modern web development technologies, enables me to deliver not
              just aesthetically pleasing, but strategically crafted websites
              that drive user engagement and support your business objectives.
            </motion.p>

            <div className='flex justify-center xl:hidden relative'>
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden xl:flex'
            >
              <ProjectsBtn />
            </motion.div>
          </header>
        </div>
        <figure className='w-[1200px] h-full absolute right-0 bottom-0'>
          <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-x-0 ' />
          <ParticlesContainer />
          <figcaption className='sr-only'>
            Interactive particles representing digital innovation and creativity
          </figcaption>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
          >
            <Avatar />
          </motion.div>
        </figure>
      </section>
    </>
  );
}
