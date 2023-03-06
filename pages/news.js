import Link from 'next/link'
import Image from 'next/image'
import { GetInIcon } from '../src/icons'
import NewsImage from '../public/news.png'
import Logo from '../public/black_logo.png'

function News() {
  return (
    <>
      <nav className='w-full flex items-center justify-between pt-5 px-16'>
        <div className='w-full flex justify-between items-center mx-auto'>
          <Link href='/'>
            <div className='flex items-center cursor-pointer'>
              <Image src={Logo} alt='' />
            </div>
          </Link>

          <div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
            <ul className='flex justify-between items-center'>
              <li>
                <Link
                  href='/'
                  // className='transition duration-700'
                >
                  <a className='cursor-pointer hover:text-orange-color' aria-current='page'>
                    Our Story
                  </a>
                </Link>
              </li>

              <li>
                <Link href='/'>
                  <a href='#' className='cursor-pointer hover:text-orange-color ml-10'>
                    Services
                  </a>
                </Link>
              </li>

              <li>
                <Link href='/news'>
                  <a className='cursor-pointer text-orange-color ml-10'>News</a>
                </Link>
              </li>

              <li>
                <Link href='/'>
                  <a href='#' className='cursor-pointer hover:text-orange-color ml-10'>
                    Careers
                  </a>
                </Link>
              </li>

              <li>
                <Link href='/'>
                  <a href='#' className='cursor-pointer hover:text-orange-color ml-10'>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <button
            className='flex items-center px-4 py-2 bg-orange-color rounded-full text-white
            hover:bg-orange-full-color font-helvetica'
          >
            <p className='mr-3 text-base'>Get in touch</p>

            <GetInIcon className='stroke-white' />
          </button>
        </div>
      </nav>

      <div className='pl-32 mt-44'>
        <div className='grid grid-cols-3'>
          <span className='col-start-2 col-span-2 text-orange-color text-8xl font-bold'>
            <i>OUR</i> <br /> NEWS
          </span>
        </div>

        <div className='px-16 mt-32 grid grid-cols-2 gap-20'>
          <div className='font-helvetica'>
            <Image src={NewsImage} />
          </div>

          <div className='font-helvetica w-[688px] relative'>
            <p className='font-bold text-5xl w-[600px]'>A Latest News Title Comes Here</p>

            <p className='mt-10 text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi ipsum nisl et feugiat cursus sed lorem. Non
              velit lectus ut ornare ligula hendrerit. Amet nulla volutpat gravida lectus dignissim. Amet in phasellus
              nullam nulla aliquam.
            </p>

            <button
              className='absolute bottom-0 flex items-center px-4 py-2 border border-black hover:border-orange-color
              rounded-full text-black hover:text-orange-color group'
            >
              Get in touch <GetInIcon className='ml-2 stroke-black group-hover:stroke-orange-color' />
            </button>
          </div>

          <div className='font-helvetica'>
            <Image src={NewsImage} />

            <p className='font-extrabold text-4xl mt-5'>
              A Latest News Title
              <br />
              Comes Here
            </p>

            <p className='mt-5 text-xl'>A latest news secondary title comes here</p>
          </div>

          <div className='font-helvetica'>
            <Image src={NewsImage} />

            <p className='font-extrabold text-4xl mt-5'>
              A Latest News Title
              <br />
              Comes Here
            </p>

            <p className='mt-5 text-xl'>A latest news secondary title comes here</p>
          </div>

          <div className='font-helvetica-sans'>
            <Image src={NewsImage} />

            <p className='font-extrabold text-4xl mt-5'>
              A Latest News Title
              <br />
              Comes Here
            </p>

            <p className='mt-5 text-xl'>A latest news secondary title comes here</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
