import Image from 'next/image'
import Logo from '../public/black_logo.png'
import Logo2 from '../public/logo-mobile.png'
import Link from 'next/link'
import { GetInIcon, Plus2Icon } from '../src/icons'

function Dispatcher() {
  return (
    <>
      <nav className='w-full flex items-center justify-between pt-5 px-5 lg:px-16'>
        <div className='w-full flex justify-between items-center mx-auto'>
          <Link href='#'>
            <a className='hidden md:flex items-center'>
              <Image src={Logo} alt='' />
            </a>
          </Link>
          <Link href='#'>
            <a className='flex items-center md:hidden'>
              <Image src={Logo2} alt='' />
            </a>
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
                  <a className='cursor-pointer hover:text-orange-color ml-10'>Services</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className='cursor-pointer hover:text-orange-color ml-10'>Careers</a>
                </Link>
              </li>

              <li>
                <Link href='/'>
                  <a className='cursor-pointer hover:text-orange-color ml-10'>Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <button
            className='flex items-center px-4 py-2 bg-orange-color rounded-full text-white hover:bg-orange-full-color
          font-helvetica'
          >
            <p className='mr-3 text-base'>Get in touch</p>

            <GetInIcon className='stroke-white' />
          </button>
        </div>
      </nav>
      <div className='font-helvetica font-medium px-5 lg:px-96 mt-44'>
        <p className='font-extrabold text-5xl'>Dispatcher</p>
        <p className='mt-8 text-base font-normal'>
          Ontario, US / Full-time
          <br />
          <span className='text-[#707070]'>Posted on 12 Feb, 2022</span>
        </p>
        <p className='my-10 font-extrabold text-4xl'>Summary</p>
        <p className='text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non montes, in quis faucibus leo vulputate
          velit tincidunt. Nibh mauris quis sit et erat cursus. Habitasse lectus nec cursus phasellus elit curabitur
          felis cras. In lacus, nisi natoque ullamcorper viverra fermentum non. Nibh velit lacinia quisque massa lorem
          facilisis. Facilisis id quam sed in ut morbi orci aliquet. Aliquet mattis porttitor arcu non erat consectetur
          fringilla mattis habitasse. Dignissim arcu cras elit magna volutpat arcu tincidunt orci.
          <br />
          <br />
          Amet, aliquet adipiscing et eget nunc enim adipiscing ac. Viverra velit mi tortor gravida massa fringilla nibh
          quis. Consequat vel netus molestie pretium eget tristique. Ut risus eget lacus aliquet netus. Aenean nibh
          auctor leo in consectetur vel eget.
        </p>
        <p className='mt-20 mb-7 font-extrabold text-4xl'>Key Qualifications</p>
        <p className='text-base'>
          <span className='mr-2'>• </span> 5+ years social media and communications experience (owned and/or earned
          channels)
          <br />
          <br />
          <span className='mr-2'>• </span> Quick learner and self-starter with excellent communication, collaboration,
          and planning skills, demonstrating meticulous attention to detail
          <br />
          <br />
          <span className='mr-2'>• </span> Data-informed decision-maker and risk-assessor, with experience employing
          social listening, trends analysis, and audience insights, as well as cross-functional guidance and input.
          <br />
          <br />
          <span className='mr-2'>• </span> Comfortable handling sensitive topics and issues on behalf of a massive brand
          <br />
          <br />
          <span className='mr-2'>• </span> Able to move quickly and nimbly in a fast-paced environment with a high level
          of cross-functional alignment and collaboration
          <br />
          <br />
          <span className='mr-2'>• </span> Flexible to work weekends as needed
        </p>
        <p className='mt-20 mb-7 font-extrabold text-4xl'>Description</p>
        <p className='text-base'>
          Document, maintain and communicate social marketing security protocols, i.e. requirements, processes,
          timelines, tools, etc.
          <br />
          <br />
          Manage end-to-end process around identifying crises, assessing severity, escalating to stakeholders, and
          determining the best plan of action on social across lines of business
          <br />
          <br />
          Liaise with cross-functional partners in legal, business affairs, corporate comms, PR, and marketing ops as
          needed to ensure brand safety, security, privacy and compliancy on social
          <br />
          <br />
          Facilitate contracts with social creators and partners
          <br />
          <br />
          Develop and communicate disclosure requirements and compliance policy guidelines with talent, creators and
          partners in close partnership with legal and business affairs
        </p>
        <div className='text-center mt-60'>
          <p className='font-extrabold text-3xl lg:text-4xl'>Apply for this role</p>
          <div className='block md:hidden'>
            <p className='mt-5 text-sm'>Please submit your resume. It will help us understand</p>
            <p className='text-sm'>most closely match your skills and interests.</p>
          </div>
          <div className='hidden md:block'>
            <p className='mt-5 text-sm'>Please submit your resume. It will help us understand which teams</p>
            <p className='lg:text-sm'>which teams most closely match your skills and interests.</p>
          </div>
        </div>
        <div className='mt-16 text-center lg:w-8/12 m-auto'>
          <form action=''>
            <div className='lg:flex'>
              <input
                type='text'
                placeholder='First name'
                className='w-full pl-5 rounded-full placeholder:text-lg placeholder:font-normal placeholder:text-[#707070]'
              />
              <input
                type='text'
                placeholder='Last name'
                className='w-full pl-5 mt-5 lg:mt-0 ml-0 lg:ml-10 rounded-full placeholder:text-lg placeholder:font-normal placeholder:text-[#707070]'
              />
            </div>
            <input
              type='text'
              placeholder='Email'
              className='w-full p-3 pl-5 mt-5 lg:mt-10 rounded-full placeholder:text-lg placeholder:font-normal placeholder:text-[#707070]'
            />
            <br />

            <textarea
              type='text'
              placeholder='Cover letter'
              className='w-full placeholder:text-start h-52 p-3 pl-5 rounded-3xl mt-5 lg:mt-10 placeholder:text-lg placeholder:font-normal placeholder:text-[#707070]'
            />

            <div className='border-2 mt-5 lg:mt-10 py-10 border-dashed rounded-3xl'>
              <p className='text-xl md:text-4xl font-extrabold'>Attach Resume</p>
              <p className='text-lg hidden md:block'>Attach a file from your device or Drag and drop here</p>
              <div className='rounded-full bg-[#F5F5F5E5] w-32 lg:w-40 m-auto px-5 py-2 mt-5'>
                <button className='flex justify-between text-xs md:text-lg items-center w-full text-orange-color font-normal'>
                  Attach a file
                  <Plus2Icon />
                </button>
              </div>
            </div>
            <button className='my-14 bg-orange-color text-white rounded-full py-3 px-5 font-normal'>
              Submit application
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Dispatcher
