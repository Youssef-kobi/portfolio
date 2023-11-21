import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { useForm } from '@formspree/react';
import Head from 'next/head';

const Contact = () => {
  const [state, handleSubmit] = useForm('mjvqdqgn'); // Replace "yourFormId" with your actual Formspree form ID

  return (
    <>
      <Head>
        <title>Contact Me - Get in Touch for Web Development Services</title>
        <meta
          name='description'
          content='Reach out to discuss your web development needs, collaborate on innovative projects, or inquire about my expertise in React.js, Next.js, and UI/UX design.'
        />
      </Head>
      <div className='h-full bg-primary/30'>
        <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
          <div className='flex flex-col w-full max-w-[700px] '>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-[35px] leading-tight md:text-[54px] md:leading-[1.3] font-semibold text-center mb-12'
            >
              Let&apos;s <span className='text-accent'>connect.</span>
            </motion.h2>
            <motion.form
              onSubmit={handleSubmit}
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex-1 flex flex-col gap-6 w-full'
            >
              <div className='flex gap-x-6 w-full'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  className='w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light'
                />
                <input
                  type='email'
                  name='_replyto'
                  placeholder='Email'
                  className='w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light'
                />
              </div>
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                className='w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light'
              />
              <textarea
                name='message'
                placeholder='Message'
                className='pl-6 bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light w-full h-[180px] p-6 capitalize rounded-lg resize-none'
              />
              <div className='w-full flex justify-between items-center'>
                <button
                  type='submit'
                  className='h-[52px] rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
                >
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                    Let&apos;s talk
                  </span>
                  <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                </button>
                {state.succeeded ? (
                  <motion.p
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    // transition={{ delay: 0.5 }}
                    className='text-green-500'
                  >
                    Thanks for contacting us!
                  </motion.p>
                ) : null}
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
