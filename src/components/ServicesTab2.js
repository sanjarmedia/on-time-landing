import Image from 'next/image'
import tabImg from '../../public/tab-2.png'

export function ServicesTab2() {
  return (
    <div className='mt-[100px]'>
      <div className='flex justify-between'>
        <div className='w-[550px] text-xl font-normal'>
          <p className='text-5xl	font-extrabold pb-[60px] tracking-tight'>Drayage</p>
          <div>
            <p className='pb-[40px]'>
              With On Time Express, you get close to a decade of experience breaking down the chaos that comes with
              shipping through ports. We understand drayage is one of the most vital steps in the transportation chain
              and offer customizable solutions for every type of drayage movement. These solutions emphasize quality and
              timing to insure that those short distance movements don’t ever affect the long term goals of the cargo or
              the operations following.
            </p>
          </div>
        </div>

        <div className='w-1/2 flex justify-end'>
          <Image className='rounded-lg' alt='newLocal' src={tabImg} />
        </div>
      </div>

      <div className='mt-[90px]'>
        <h1 className='text-[40px] font-extrabold tracking-tight'>
          On Time Express Drayage <br />
          Solutions Include
        </h1>

        <div className='flex text-xl flex-wrap mt-[28px]'>
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
      </div>
    </div>
  )
}
