import { Sora } from 'next/font/google';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import TopLeftImg from '@/components/TopLeftImg';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from '@/components/Transition';
import { useRouter } from 'next/router';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div className='w-full h-screen overflow-hidden bg-site text-white bg-cover font-sora relative'>
      <header>
        <TopLeftImg />
        <Nav />
        <Header />
      </header>
      <main className='w-full h-full'>{children}</main>
    </div>
  );
};

export default Layout;
