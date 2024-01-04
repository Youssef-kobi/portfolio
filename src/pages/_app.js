import Layout from '@/components/Layout';
// import Transition from '@/components/Transition';
import '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // Dynamically import Transition component with lazy loading
const Transition = dynamic(() => import('@/components/Transition'), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Disable SSR for this component
});

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full '>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}
