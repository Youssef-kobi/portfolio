import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri';
import { BiLogoUpwork } from 'react-icons/bi';
import { PiDevToLogo } from 'react-icons/pi';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <a
        target='_blank'
        href="https://www.linkedin.com/in/youssef-elkobi/"
        className='hover:text-accent transition-all duration-300'
        aria-label='LinkedIn'
        rel="noopener noreferrer"
      >
        <RiLinkedinLine />
      </a>
      <a
        target='_blank'
        href="https://github.com/Youssef-kobi"
        className='hover:text-accent transition-all duration-300'
        aria-label='GitHub'
        rel="noopener noreferrer"
      >
        <RiGithubLine />
      </a>
      <a
        target='_blank'
        href="https://www.upwork.com/freelancers/~0156237375f41e5676"
        className='hover:text-accent transition-all duration-300'
        aria-label='Upwork'
        rel="noopener noreferrer"
      >
        <BiLogoUpwork />
      </a>
      <a
        target='_blank'
        href="https://dev.to/youssefkobi"
        className='hover:text-accent transition-all duration-300'
        aria-label='DevTo'
        rel="noopener noreferrer"
      >
        <PiDevToLogo />
      </a>
      {/* Uncomment if you have a YouTube channel */}
      {/* <a
        target='_blank'
        href="https://www.youtube.com/channel/CHANNEL_ID"
        className='hover:text-accent transition-all duration-300'
        aria-label='YouTube'
        rel="noopener noreferrer"
      >
        <RiYoutubeLine />
      </a> */}
    </div>
  )
}

export default Socials;
