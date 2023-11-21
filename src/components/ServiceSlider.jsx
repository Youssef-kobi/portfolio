// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
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
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'


const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Creating distinctive brand identities that resonate with your target audience and embody your company values, ensuring a lasting impression.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Designing intuitive, visually appealing interfaces that enhance user experience, focusing on usability, aesthetics, and modern design principles.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building robust, scalable, fast web applications with seamless functionality, ensuring high performance and reliability for your digital presence.',
  },
  {
    icon: <RxReader />,
    title: 'Consulting',
    description: 'Providing expert guidance and strategies, leveraging my entrepreneurial experience to help you navigate and succeed in the digital landscape.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: `Implementing strategic SEO techniques and HTML5 tags to increase your website's visibility, drive organic traffic, and improve search engine rankings.`,
  },
];

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
      freeMode={{ enable: true, }}
      pagination={{ clickable: true, }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px] overflow-hidden"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/* title & desc */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className=' text-white/60 font-light max-w-[350px] leading-normal '>{item.description}</p>
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>))}
    </Swiper>
  )
}

export default ServiceSlider