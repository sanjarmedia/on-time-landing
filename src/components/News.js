import Link from 'next/link'
import Image from 'next/image'
import { ArrowToLeft } from '../icons'
import NewsImage from '../../public/news.png'

export function News() {
  return (
    <>
      <div className='mt-64 pr-10 lg:px-48 flex justify-between text-xl'>
        <div className='lg:w-1/2 flex justify-between lg:justify-end ml-10'>
          <div className='text-2xl text-gray-color'>
            03.
            <br />
            <h1 className='text-orange-color text-8xl font-bold'>
              <i>our</i> <br /> news
            </h1>
          </div>
        </div>

        <Link href='/news'>
          <div className='flex items-end justify-end font-helvetica font-bold uppercase'>
            <div className='flex items-center border-black border-b-2 cursor-pointer'>
              <p className='mr-2'>See all</p>

              <ArrowToLeft />
            </div>
          </div>
        </Link>
      </div>

      <div className='mt-32 lg:px-44 lg:flex justify-between items-center gap-4'>
        <div className='font-helvetica px-10 lg:px-16'>
          <Image src={NewsImage} />
          <p className='font-extrabold text-4xl'>
            A Latest News Title
            <br />
            Comes Here
          </p>
          <p className='mt-5'>A latest news secondary title comes here</p>
        </div>

        <div className='font-helvetica px-10 mt-10 lg:mt-0 lg:px-0'>
          <Image src={NewsImage} />
          <p className='font-extrabold text-4xl'>
            A Latest News Title
            <br />
            Comes Here
          </p>
          <p className='mt-5'>A latest news secondary title comes here</p>
        </div>
      </div>
    </>
  )
}
