import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href={'/work'} className='relative  z-50 w-[135px] h-[135px] lg:w-[185px] lg:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group hover:scale-110 duration-300'>
        <Image src={'/rounded-text.png'} width={101} height={108} alt='rounded text' className='animate-spin-slow w-full h-full max-w-[101px] max-h-[108px] xl:max-w-[141px] xl:max-h-[148px]' />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  )
}

export default ProjectsBtn