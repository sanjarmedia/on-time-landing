import { Fragment, useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import { GetInIcon, MinusIcon, PlusIcon } from '../icons'
import Link from 'next/link'
import { Element } from 'react-scroll'

export function Careers() {
  const [open, setOpen] = useState(0)

  const handleOpen = value => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <Element name='careers' className='mt-64 lg:px-32'>
      <div className='flex justify-center mr-44'>
        <div className='text-2xl text-gray-color'>
          04.
          <br />
          <span className='text-orange-color text-8xl font-bold'>
            <i>open</i> <br /> roles
          </span>
        </div>
      </div>

      <div className='px-10 lg:px-28 lg:flex text-xl mt-32 font-helvetica'>
        <p className='lg:w-2/5'>
          On Time Express is a perfect company to join if you are looking for flexible growth opportunities, an
          energetic and creative working environment, and lots of interesting and challenging tasks. We are looking for
          industrious and reliable logistics professionals and owner-operators.
        </p>

        <p className='lg:w-1/3 mt-10 lg:mt-0 lg:ml-16'>
          Your hard work and efforts are always properly compensated. We value and proud of our team as a whole and as
          individuals. We set the goal to create the most convenient conditions for each of our workers
        </p>
      </div>

      <div className='px-10 lg:px-28 mt-24'>
        <Fragment>
          <Accordion open={open === 1} onClick={() => handleOpen(1)}>
            <AccordionHeader className='border-transparent'>
              <div className='w-full font-helvetica'>
                <div className='flex justify-between items-center'>
                  <Link href='/dispatcher'>
                    <p className='text-4xl font-bold'>Dispatcher</p>
                  </Link>

                  {open === 1 ? (
                    <MinusIcon className='flex items-start' />
                  ) : (
                    <PlusIcon className='flex items-start stroke-orange-color' />
                  )}
                </div>

                <div
                  className='text-start font-helvetica'
                  onClick={event => {
                    event.stopPropagation()
                  }}
                >
                  <p className='text-lg mt-6'>Ontario, US / Full-time</p>
                  <p className='text-base text-gray-500 mt-2'>Posted - 18 May, 2022</p>
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className='mt-10 pb-24 font-helvetica font-semibold'>
              <p className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non montes, in quis faucibus leo
                vulputate velit tincidunt. Nibh mauris quis sit et erat cursus. Habitasse lectus nec cursus phasellus
                elit curabitur felis cras. In lacus, nisi natoque ullamcorper viverra fermentum non. Nibh velit lacinia
                quisque massa lorem facilisis. Facilisis id quam sed in ut morbi orci aliquet. Aliquet mattis porttitor
                arcu non erat consectetur fringilla mattis habitasse. Dignissim arcu cras elit magna volutpat arcu
                tincidunt orci.
              </p>

              <div className='mt-5 flex items-center font-helvetica'>
                <button
                  className='flex items-center px-4 py-2 border border-orange-color hover:border-orange-color rounded-full
                  text-orange-color hover:text-orange-color group'
                >
                  <Link href='/dispatcher'>
                    <p className='mr-3 text-lg'>See full description</p>
                  </Link>
                  <GetInIcon className='stroke-orange-color' />
                </button>
                <button className='ml-5 flex items-center px-4 py-2 rounded-full text-white group bg-orange-color'>
                  <Link href='/dispatcher'>
                    <p className='mr-3 text-lg'>Apply for this role</p>
                  </Link>
                  <GetInIcon className='stroke-white' />
                </button>
              </div>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2} onClick={() => handleOpen(2)}>
            <AccordionHeader className='border-transparent font-helvetica'>
              <div className='w-full'>
                <div className='flex justify-between items-center'>
                  <Link href='/dispatcher'>
                    <p className='text-4xl font-bold'>Driver</p>
                  </Link>

                  {open === 2 ? (
                    <MinusIcon className='flex items-start' />
                  ) : (
                    <PlusIcon className='flex items-start stroke-orange-color' />
                  )}
                </div>
                <div
                  className='text-start'
                  onClick={event => {
                    event.stopPropagation()
                  }}
                >
                  <p className='text-lg mt-6'>Ontario, US / Full-time</p>
                  <p className='text-base text-gray-500 mt-2'>Posted - 17 May, 2022</p>
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className='mt-10 pb-24 font-helvetica font-semibold'>
              <p className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non montes, in quis faucibus leo
                vulputate velit tincidunt. Nibh mauris quis sit et erat cursus. Habitasse lectus nec cursus phasellus
                elit curabitur felis cras. In lacus, nisi natoque ullamcorper viverra fermentum non. Nibh velit lacinia
                quisque massa lorem facilisis. Facilisis id quam sed in ut morbi orci aliquet. Aliquet mattis porttitor
                arcu non erat consectetur fringilla mattis habitasse. Dignissim arcu cras elit magna volutpat arcu
                tincidunt orci.
              </p>

              <div className='mt-5 flex items-center font-helvetica'>
                <button
                  className='flex items-center px-4 py-2 border border-orange-color hover:border-orange-color rounded-full
                   text-orange-color hover:text-orange-color group'
                >
                  <Link href='/dispatcher'>
                    <p className='mr-3 text-lg'>See full description</p>
                  </Link>
                  <GetInIcon className='stroke-orange-color' />
                </button>

                <button className='ml-5 flex items-center px-4 py-2 rounded-full text-white group bg-orange-color'>
                  <Link href='/dispatcher'>
                    <p className='mr-3 text-lg'>Apply for this role</p>
                  </Link>
                  <GetInIcon className='stroke-white' />
                </button>
              </div>
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </Element>
  )
}
