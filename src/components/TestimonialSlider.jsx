// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';


// testimonial data
const testimonialData = [
  {
    image: '/t-avt-3.png',
    name: 'Jeremy',
    position: 'Customer',
    message:
      'Youssef was fantastic - the project was completed quickly and in a professional manner. Even though it was a small project Youssef took time to discuss the issues and provided insightful suggestions for an improved user experience. He was polite, courteous and professional throughout. Strongly recommended - I look forward to our next project!',
  },
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true, }}
      navigation
      modules={[Navigation, Pagination]}
      className="h-[400px] overflow-hidden"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            {/* avatar, name, position */}
            <div className=' w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={100} height={100} alt='' />
                </div>
                <div className='text-lg'>{person.name}</div>
                <div className='text-[12px] uppercase font-extralight'>{person.position}</div>
              </div>
            </div>
            {/* quote & message */}
            <div className=' flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
              <div className='mb-4'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
              </div>
              {/* message */}
              <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
            </div>

          </div>
        </SwiperSlide>))}
    </Swiper>
  )
}

export default TestimonialSlider