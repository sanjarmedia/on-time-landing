import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { CheckedIcon } from '../icons'

export function Notification({ open, close }) {
  if (open) {
    setTimeout(() => {
      close()
    }, 2000)
  }

  return (
    <>
      <div className='fixed z-50 inset-0 flex px-4 mt-20 -mr-10 pointer-events-none sm:items-start hidden md:inline'>
        <div className='w-full flex flex-col space-y-4 sm:items-end'>
          <Transition
            show={open}
            as={Fragment}
            enter='transform ease-out duration-300 transition'
            enterFrom='translate-y-5 opacity-100 sm:translate-y-0 sm:translate-x-5'
            enterTo='translate-y-0 opacity-100 sm:-translate-x-5'
            leave='transition ease-in duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='mt-5 w-80 bg-white shadow-2xl rounded-l-xl ring-1 ring-black ring-opacity-5 p-2 flex items-center'>
              <div className='flex justify-center items-center bg-gray-50 rounded-lg w-7 h-7 mr-3'>
                <CheckedIcon />
              </div>

              <p className='text-orange-color font-medium font-helvetica'>E-mail copied successfully</p>
            </div>
          </Transition>
        </div>
      </div>

      <div className='fixed z-50 bottom-5 left-36 px-4 pointer-events-none inline md:hidden'>
        <div className='w-full flex flex-col items-center space-y-4 mb-10'>
          <Transition
            show={open}
            as={Fragment}
            enter='transform ease-out duration-300 transition'
            enterFrom='translate-y-10 opacity-100 sm:translate-y-0 sm:translate-x-0'
            enterTo='translate-y-0 opacity-100 sm:-translate-y-5 sm:translate-x-0'
            leave='transition ease-in duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='w-80 bg-white shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5 p-2 flex items-center'>
              <div className='flex justify-center items-center bg-gray-50 rounded-lg w-7 h-7 mr-3'>
                <CheckedIcon />
              </div>

              <p className='text-orange-color font-medium font-helvetica'>E-mail copied successfully</p>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
