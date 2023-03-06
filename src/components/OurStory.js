import Image from 'next/image'
import QuoteIcon from '../../public/quote-icon.png'
import MaskGroup from '../../public/mask-group.png'
import User from '../../public/user.png'
import User2 from '../../public/user2.png'
import { Element } from 'react-scroll'

export function OurStory() {
  return (
    <Element name='OurStory'>
      <div className='mt-40 px-16 lg:grid lg:grid-cols-3 lg:gap-4 text-xl'>
        <div className='text-2xl text-gray-color col-start-2'>
          01.
          <br />
          <h1 className='text-orange-color text-8xl'>
            <i>our</i> story
          </h1>
        </div>
      </div>

      <div className='mt-32 px-5 lg:px-16 lg:grid grid-cols-3 gap-4 text-xl font-helvetica'>
        <div className='hidden lg:flex items-center justify-center'>
          <Image src={QuoteIcon} />
        </div>

        <p>
          On Time Express was founded in 2013 by an immigrant who began his logistics career as an over-the-road company
          truck driver. Over the years with the help of our experienced staff we have gown into one of the nations most
          competitive and dependable logistics companies, servicing 48 states in US.
        </p>

        <p className='flex items-end mt-10 lg:mt-0'>
          On Time Express was founded in 2013 by an immigrant who began his logistics career as an over-the-road company
          truck driver. Over the years with the help of our experienced staff we have gown into one of the nations most
          competitive and dependable logistics companies, servicing 48 states in US.
        </p>
      </div>

      <div className='px-5 mt-32 flex justify-center'>
        <Image src={MaskGroup} />
      </div>

      <div className='mt-40 px-10 lg:px-16 grid grid-cols-2 lg:grid-cols-3 gap-4 text-xl'>
        <h1 className='font-bold text-orange-color text-8xl lg:m-auto'>
          <i>Meet</i>
          <br />
          the
          <br />
          team
        </h1>

        <p className='text-xl mt-5 ml-20 lg:ml-0'>
          Meet our core <br />
          team members
        </p>
      </div>

      <div className='mt-6 px-10 lg:px-32 md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 text-xl font-helvetica'>
        <div className='m-auto mt-10'>
          <div className='hidden md:block'>
            <Image src={User} alt='' />
          </div>

          <div className='block md:hidden'>
            <Image src={User2} alt='' />
          </div>

          <p className='mt-5 text-3xl font-bold'>Name Surname</p>
          <p className='text-lg font-light'>Position</p>
        </div>

        <div className='m-auto mt-10'>
          <div className='hidden md:block'>
            <Image src={User} alt='' />
          </div>

          <div className='block md:hidden'>
            <Image src={User2} alt='' />
          </div>

          <p className='mt-5 text-3xl font-bold'>Name Surname</p>
          <p className='text-lg font-light'>Position</p>
        </div>

        <div className='m-auto mt-10'>
          <div className='hidden md:block'>
            <Image src={User} alt='' />
          </div>

          <div className='block md:hidden'>
            <Image src={User2} alt='' />
          </div>

          <p className='mt-5 text-3xl font-bold'>Name Surname</p>
          <p className='text-lg font-light'>Position</p>
        </div>

        <div className='m-auto mt-10'>
          <div className='hidden md:block'>
            <Image src={User} alt='' />
          </div>

          <div className='block md:hidden'>
            <Image src={User2} alt='' />
          </div>

          <p className='mt-5 text-3xl font-bold'>Name Surname</p>
          <p className='text-lg font-light'>Position</p>
        </div>

        <div className='m-auto mt-10'>
          <div className='hidden md:block'>
            <Image src={User} alt='' />
          </div>

          <div className='block md:hidden'>
            <Image src={User2} alt='' />
          </div>

          <p className='mt-5 text-3xl font-bold'>Name Surname</p>
          <p className='text-lg font-light'>Position</p>
        </div>

        <div className='m-auto mt-10'>
          <div className='hidden md:block'>
            <Image src={User} alt='' />
          </div>

          <div className='block md:hidden'>
            <Image src={User2} alt='' />
          </div>

          <p className='mt-5 text-3xl font-bold'>Name Surname</p>
          <p className='text-lg font-light'>Position</p>
        </div>
      </div>
    </Element>
  )
}
