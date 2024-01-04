import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  // Aspect ratio: 128 / 134 = 0.95522388 (approximately 0.96)
  const width = 128;
  const height = 134;

  return (
    <div className='mx-auto xl:mx-0'>
      <Link href={'/work'} className='relative z-50 w-[135px] h-[135px] lg:w-[185px] lg:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group hover:scale-110 duration-300'>
        <Image src={'/rounded-text.webp'} width={width} height={height} alt='rounded text' className='animate-spin-slow' />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
