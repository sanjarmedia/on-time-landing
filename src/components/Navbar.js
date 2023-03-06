import { useState } from 'react'
import Image from 'next/image'
import copy from 'copy-to-clipboard'
import { Notification } from './Notification'
import { ExitIcon, FrameIcon, GetInBoldIcon, GetInIcon } from '../icons'
import Logo from '../../public/logo.png'
import DeLogo from '../../public/logo-gray.png'
import { Link } from 'react-scroll'

export function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const [notification, setNotification] = useState(false)

  function onCopyToClipboard() {
    copy('info@otexpress.com')

    setNotification(true)
  }

  const activeNavbar = 'lg:hidden block bg-white text-black z-40 fixed top-0 bottom-0 left-0 right-0 ' + 'px-10 py-12'
  const deNavbar = 'hidden'

  return (
    <nav className='absolute w-[660px] md:w-full bg-transparent mt-3'>
      <div className='justify-between px-4 mx-auto lg:max-w-8xl md:items-center lg:flex lg:px-16'>
        <div className='z-50'>
          <div className='flex items-center justify-between py-3 lg:block'>
            <a href='#'>
              <Image src={Logo} />
            </a>

            <div className='lg:hidden flex'>
              <button
                className='mr-2 flex items-center px-4 py-2 bg-orange-color rounded-full text-white
                hover:bg-orange-full-color font-helvetica duration-300'
                onClick={onCopyToClipboard}
              >
                <p className='mr-3 text-base'>Get in touch</p>

                <GetInIcon className='stroke-white' />
              </button>

              <button
                className='z-50 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <ExitIcon className='fixed right-5' /> : <FrameIcon className='stroke-white' />}
              </button>
            </div>
          </div>
        </div>

        <div className='flex uppercase'>
          <div className='flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 text-white hidden'>
            <ul className='items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0'>
              <li className='hover:text-orange-color cursor-pointer'>
                <Link
                  activeClass='active'
                  className='test1 duration-300'
                  to='OurStory'
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <h2>Our Story</h2>
                </Link>
              </li>

              <li className='hover:text-orange-color cursor-pointer duration-300'>
                <Link activeClass='active' className='test1' to='services' spy={true} smooth={true} duration={800}>
                  <h2>Services</h2>
                </Link>
              </li>

              <li className='hover:text-orange-color cursor-pointer duration-300'>
                <Link activeClass='active' className='test1' to='careers' spy={true} smooth={true} duration={900}>
                  <h2>Careers</h2>
                </Link>
              </li>

              <li className='hover:text-orange-color cursor-pointer duration-300'>
                <Link activeClass='active' className='test1' to='contact' spy={true} smooth={true} duration={1000}>
                  <h2>Contact</h2>
                </Link>
              </li>

              <button
                className='flex items-center px-4 py-2 bg-orange-color rounded-full text-white
                hover:bg-orange-full-color font-helvetica inline md:hidden duration-300'
                onClick={onCopyToClipboard}
              >
                <p className='mr-3 text-base'>Get in touch</p>

                <GetInIcon className='stroke-white' />
              </button>
            </ul>
          </div>
        </div>

        <div className='hidden lg:block'>
          <button
            className='flex items-center px-4 py-2 bg-orange-color rounded-full text-white
            hover:bg-orange-full-color font-helvetica duration-300'
            onClick={onCopyToClipboard}
          >
            <p className='mr-3 text-base'>Get in touch</p>

            <GetInIcon className='stroke-white' />
          </button>
        </div>
      </div>

      <div className={navbar ? activeNavbar : deNavbar}>
        <Image src={DeLogo} className='' />
        <div>
          <div className='pt-20'>
            <h1 className='text-9xl text-orange-color text-center font-black'>MENU</h1>
            <div className='py-10 mt-20 w-full flex items-center justify-between text-5xl'>
              Our Story
              <GetInBoldIcon className='stroke-black' />
            </div>
            <hr className='border-[#878787] border-1' />
            <div className='py-12 w-full flex items-center justify-between text-5xl'>
              Services
              <GetInBoldIcon className='stroke-black' />
            </div>
            <hr className='border-[#878787] border-1' />
            <div className='py-12 w-full flex items-center justify-between text-5xl'>
              Careers
              <GetInBoldIcon className='stroke-black' />
            </div>
            <hr className='border-[#878787] border-1' />
            <Link activeClass='active' className='test1' to='contact' spy={true} smooth={true} duration={1000}>
              <div className='z-50 py-12 w-full flex items-center justify-between text-5xl'>
                Contact
                <GetInBoldIcon className='stroke-black' />
              </div>
            </Link>
          </div>
          <div className='mt-40 flex justify-end'>
            <button
              className='flex text-2xl items-center font-helvetica bg-orange-color text-white rounded-full px-5 py-4
              duration-300'
              onClick={onCopyToClipboard}
            >
              Get in touch
              <GetInIcon className='stroke-white ml-2' />
            </button>
          </div>
        </div>
      </div>

      <Notification open={notification} close={() => setNotification(false)} />
    </nav>
  )
}
