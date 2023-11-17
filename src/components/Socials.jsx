import Link from 'next/link'
import { RiGithubLine, RiGitlabLine, RiLinkedinLine, RiYoutubeLine } from 'react-icons/ri'
import { BiLogoUpwork } from 'react-icons/bi'
import { PiDevToLogo } from 'react-icons/pi'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link target='_blank' href="https://www.linkedin.com/in/youssef-elkobi/" className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link  target='_blank' href="https://github.com/Youssef-kobi" className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link target='_blank' href="https://www.upwork.com/freelancers/~0156237375f41e5676" className='hover:text-accent transition-all duration-300'>
        <BiLogoUpwork />
      </Link>
      <Link target='_blank'  href="https://dev.to/youssefkobi" className='hover:text-accent transition-all duration-300'>
        <PiDevToLogo />
      </Link>
      {/* <Link target='_blank' href="/" className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link> */}
    </div>
  )
}

export default Socials