import copy from 'copy-to-clipboard'
import { Navbar } from './Navbar'
import { Notification } from './Notification'
import { GetInIcon, PlayIcon } from '../icons'
import { useState } from 'react'

export function Main() {
  const [notification, setNotification] = useState(false)

  function onCopyToClipboard() {
    copy('info@otexpress.com')

    setNotification(true)
  }

  return (
    <>
      <Navbar />

      <div className='bg-background-main bg-cover w-full h-screen flex justify-center items-center text-white'>
        <div className='font-bold'>
          <p className='uppercase text-2xl'>Team Of </p>

          <h1 className='uppercase text-7xl lg:text-8xl flex items-start font-black -mt-4'>
            <i>best</i> <span className='text-4xl mt-3 ml-10 font-helvetica'>©</span>
          </h1>

          <h1 className='uppercase text-7xl lg:text-8xl lg:text-end font-black -mt-4'>logistics</h1>

          <h1 className='uppercase text-7xl lg:text-8xl font-black -mt-4'>specialists</h1>

          <div className='flex justify-between mt-10 font-helvetica'>
            <button
              className='flex items-center px-4 py-2 border border-white hover:border-orange-color hover:bg-orange-color
              rounded-full text-white duration-300'
              onClick={onCopyToClipboard}
            >
              <p className='mr-3 text-lg font-normal'>Get in touch</p>

              <GetInIcon className='ml-2 stroke-white' />
            </button>

            <button
              className='flex items-center px-4 py-2 border border-white hover:border-orange-color hover:bg-orange-color
              rounded-full text-white duration-300'
            >
              <PlayIcon />

              <p className='ml-3 text-lg font-normal'>Watch the Showreel</p>
            </button>
          </div>
        </div>
      </div>

      <Notification open={notification} close={() => setNotification(false)} />
    </>
  )
}
