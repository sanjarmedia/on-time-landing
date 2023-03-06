import { Fragment, useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import Image from 'next/image'
import { DownIcon, UpIcon } from '../icons'
import tab1Img from '../../public/tab-1.png'
import tab2Img from '../../public/tab-2.png'
import tab3Img from '../../public/tab-3.png'
import tab4Img from '../../public/tab-4.png'

export function Accordions() {
  const [open, setOpen] = useState(0)

  const handleOpen = value => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <div className='px-10 mt-20'>
      <Fragment>
        <Accordion open={open === 1} onClick={() => handleOpen(1)}>
          <AccordionHeader className='my-10 border-none'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-left font-helvetica text-5xl font-extrabold'>
                Full Trackload & Less <br /> Than truckload
              </p>
              {open === 1 ? <DownIcon /> : <UpIcon />}
            </div>
          </AccordionHeader>

          {open === 1 ? <hr className='hidden' /> : <hr className='fill-line-background border-2' />}

          <AccordionBody>
            <p className='pt-10 font-helvetica text-xl font-medium'>
              On Time Express was founded in 2013 by an immigrant who began his logistics career as an over-the-road
              company truck driver. Over the years with the help of our experienced staff we have gown into one of the
              nations most competitive and dependable logistics companies, servicing 48 states in US.
            </p>
            <p className='my-10 ont-sans text-xl font-medium'>
              Time Express was founded in 2013 by an immigrant who began his logistics career as an over-the-road
              company truck driver. Over the years with the help of our experienced staff we have gown into one of the
              nations most competitive and dependable logistics companies, servicing 48 states in US.
            </p>

            <Image src={tab1Img} />

            <div className='flex text-xl flex-wrap mt-[28px] font-medium'>
              <h1 className='text-4xl font-extrabold mb-10 mt-5'>
                On Time Express FTL <br /> & LTL Solutions Include
              </h1>
              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>01 ▪ </span>
                Expedited/Time critical freight pick-ups & deliveries
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>02 ▪ </span>
                Drop trailers at shippers
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] my-[12px]'>
                <span className='text-orange-color'>03 ▪ </span>
                Drop trailers at receivers
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>04 ▪ </span>
                Live pick-ups at shippers
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>05 ▪ </span>
                Live deliveries at receivers
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-xl text-orange-color'>06 ▪ </span>
                Driver loading assistance at shippers
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] my-[12px]'>
                <span className='text-xl text-orange-color'>07 ▪ </span>
                Driver offloading assistance at deliveries
              </div>
            </div>
            <hr className='mt-10 fill-line-background border-2' />
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} onClick={() => handleOpen(2)}>
          <AccordionHeader className='my-10 border-none'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-left font-helvetica text-5xl font-extrabold'>Drayage</p>
              {open === 2 ? <DownIcon /> : <UpIcon />}
            </div>
          </AccordionHeader>

          {open === 2 ? <hr className='hidden' /> : <hr className='fill-line-background border-2' />}

          <AccordionBody>
            <p className='py-10 font-helvetica text-xl font-medium'>
              With On Time Express, you get close to a decade of experience breaking down the chaos that comes with
              shipping through ports. We understand drayage is one of the most vital steps in the transportation chain
              and offer customizable solutions for every type of drayage movement. These solutions emphasize quality and
              timing to insure that those short distance movements don’t ever affect the long term goals of the cargo or
              the operations following.
            </p>
            <Image src={tab2Img} />

            <div className='flex text-xl flex-wrap mt-[28px] font-medium'>
              <h1 className='text-4xl font-extrabold tracking-tight mb-10 mt-5'>
                On Time Express Drayage <br />
                Solutions Include
              </h1>
              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>01 ▪ </span>
                Port to warehouse/yard
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>02 ▪ </span>
                Warehouse/yard to port
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] my-[12px]'>
                <span className='text-orange-color'>03 ▪ </span>
                Port to rail
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>04 ▪ </span>
                Port to port
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>05 ▪ </span>
                Container storage short/long term
              </div>
            </div>
            <hr className='mt-16 fill-line-background border-2' />
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} onClick={() => handleOpen(3)}>
          <AccordionHeader className='my-10 border-none'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-left font-helvetica text-5xl font-extrabold'>
                Straight Truck <br /> With Left Gate
              </p>
              {open === 3 ? <DownIcon /> : <UpIcon />}
            </div>
          </AccordionHeader>

          {open === 3 ? <hr className='hidden' /> : <hr className='fill-line-background border-2' />}

          <AccordionBody>
            <p className='font-helvetica text-xl font-medium pt-10'>
              IOn Time Express understands that no one customer has the same logistical needs when it comes to their
              cargo. Given the amount complexity required for some customers to successfully receive their freight, we
              go the extra mile to try to cover as many methods of transportation possible, including straight truck
              services. On Time Express has a fleet of straight trucks all equipped with the features of lift gate,
              pallet jack, 26’ ft in length, and dock height.
            </p>
            <p className='my-10 ont-sans text-xl font-medium'>
              The straight truck solutions our company provides bring value to our customers by allowing them to service
              a wider range of clientele, no matter what loading situations come at hand. Our fleet along with our
              experienced driving staff are extremely useful for shippers or receivers that do not have traditional
              loading docks or forklifts needed to get their freight where it needs to go.
            </p>

            <Image src={tab3Img} />

            <div className='flex text-xl flex-wrap mt-[28px] font-medium'>
              <h1 className='text-4xl font-extrabold mt-5 mb-10'>
                On Time Express Straight Truck Services Include Cargo Movement to
              </h1>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>01 ▪ </span>
                Residential pick up or delivery
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>02 ▪ </span>
                Jobsite pickup or delivery
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] my-[12px]'>
                <span className='text-orange-color'>03 ▪ </span>
                Hospitals
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>04 ▪ </span>
                Hotels
              </div>

              <div className='py-[20px] px-[28px] bg-background-gray-color rounded-[36px] mr-6 my-[12px]'>
                <span className='text-orange-color'>05 ▪ </span>
                Many more!
              </div>
            </div>
            <hr className='mt-24 fill-line-background border-2' />
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4} onClick={() => handleOpen(4)}>
          <AccordionHeader className='my-10 border-none'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-left font-helvetica text-5xl font-extrabold'>Warehousing</p>
              {open === 4 ? <DownIcon /> : <UpIcon />}
            </div>
          </AccordionHeader>

          {open === 4 ? <hr className='hidden' /> : <hr className='fill-line-background border-2' />}

          <AccordionBody className='mt-10'>
            <p className='font-helvetica text-xl font-medium'>
              With our background in logistics and previous experience as a carrier company, On Time Express understands
              that warehousing is a key component to the supply chain. Our warehouse management solutions are tailored
              to meet any customers particular requirements in providing flexible warehouse solutions that are organized
              and reliable.
            </p>
            <p className='my-10 ont-sans text-xl font-medium'>
              Our On Time Express Warehouse is conveniently located in Ontario California, just 25 miles outside of Los
              Angeles, making accessibility anywhere from the la county to the inland empire effortless. Our warehouse
              services are open 24/7, have non-stop recorded surveillance, and are staffed with a forklift certified
              crew making any job possible. From keeping inventory and load transfers to restacking and re-wrapping
              pallets, our hard working and experienced faculty are willing to go the extra mile to ensure customer
              satisfaction.
            </p>
            <p className='mb-10 ont-sans text-xl font-medium'>
              For a seamless transition in the movements of your cargo, On Time’s warehousing, inventory management, and
              real time tracking of cargo is the way to go!
            </p>

            <Image src={tab4Img} />

            <hr className='mt-10 fill-line-background border-2' />
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  )
}
