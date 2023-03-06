import { prop } from 'ramda'
import { useState } from 'react'
import { Element } from 'react-scroll'
import { useForm } from 'react-hook-form'
import { telegram } from '../telegram'
import { FacebookIcon, GmailIcon, InstagramIcon, LocationIcon, PhoneIcon, YoutubeIcon } from '../icons'
import { InputField } from './InputFiled'

export function Contact() {

  const [state, setState] = useState(false)
  const [department, setDepartment] = useState('general')

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm()

  function onSubmit(value) {
    const data = `
    - Date: ${new Date().toString()} %0A
    - Name: ${prop('name', value)} %0A 
    - Subject: ${prop('subject', value)} %0A 
    - Message: ${prop('message', value)}
    `
    // .then()

    telegram(data)
      .then(data => {
        setDepartment({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      })
      .then(data => {
        setState(true)
      })

    reset()
  }

  return (
    <Element name='contact' className='bg-background-black-color mt-32 lg:px-32 pt-32 pb-16'>
      <div className='flex justify-center lg:mr-44'>
        <div className='text-2xl text-gray-color'>
          05.
          <br />
          <span className='text-orange-color text-8xl font-bold'>
            <i>open</i> <br /> contacts
          </span>
        </div>
      </div>

      <div className='mt-24 px-10 lg:px-32 text-white font-helvetica lg:flex justify-between items-start'>
        <div className='lg:w-1/2'>
          <div className='flex items-center text-xl'>
            <PhoneIcon className='mr-5' />
            <p>657-232-4400</p>
          </div>

          <div className='flex items-center text-xl mt-5'>
            <GmailIcon className='mr-5' />
            <p>info@otexpress.com</p>
          </div>

          <div className='flex items-start text-xl mt-5'>
            <LocationIcon className='mr-5' />
            <p>
              1930 South Rochester Ave Suite 117 <br />
              Ontario, CA 91761-4400
            </p>
          </div>
        </div>

        <div className='lg:w-1/2 mt-32 lg:mt-0'>
          <p className='text-xl'>Want to know more about us?</p>
          <p className='font-extrabold text-4xl mt-5'>
            Send a Quick
            <br />
            Message
          </p>

          <form className='mt-16' onSubmit={handleSubmit(onSubmit)}>
            <div className='border-b border-white border-opacity-60 hover:border-opacity-100'>
              <InputField
                register={register}
                control={control}
                rules={{required: true}}
                error={prop('name', errors)}
                name='name'
                placeholder='Name'
              />
            </div>

            <div className='border-b border-white border-opacity-60 hover:border-opacity-100 mt-8'>
              <InputField
                register={register}
                control={control}
                rules={{required: true}}
                name='subject'
                placeholder='Subject'
              />
            </div>

            <div className='border-b border-white border-opacity-60 hover:border-opacity-100 mt-8'>
              <InputField
                register={register}
                control={control}
                rules={{required: true}}
                name='message'
                placeholder='Message'
              />
            </div>
          </form>

          <div className='flex justify-end'>
            <button
              className='border border-white rounded-full py-3 px-4 mt-10 hover:bg-orange-color hover:border-orange-color'
              onClick={handleSubmit(onSubmit)}
            >
              Sen message
            </button>
          </div>
        </div>
      </div>

      <div className='flex items-end justify-center mt-36'>
        <div className='w-1/4 lg:w-1/12 flex justify-around'>
          <InstagramIcon />
          <FacebookIcon />
          <YoutubeIcon />
        </div>
      </div>
      <p className='flex justify-center text-[#767676] font-helvetica mt-10'>
        © 2022 OnTime Express. All rights reserved.
      </p>
    </Element>
  )
}
