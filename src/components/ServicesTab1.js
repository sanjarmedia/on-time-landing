import Image from 'next/image'
import tabImg from '../../public/tab-1.png'

export function ServicesTab1() {
  return (
    <div className='mt-[100px]'>
      <div className='flex justify-between'>
        <div className='w-[550px] text-xl font-normal'>
          <p className='text-5xl	font-extrabold pb-[60px] tracking-tight'>Full Track load & Less Than Truckload</p>
          <div>
            <p className='pb-[40px]'>
              In today’s environment when time is limited and schedules are hectic, On Time Express can eliminate the
              stresses that come with trying to acquire trustworthy transportation. Our company prides itself on having
              the ability to provide our customers with what they need when they need it, worry free. With the support
              of our experienced personnel and our vast network, On Time Express has been successfully moving freight
              nationwide for almost a decade.
            </p>

            <p>
              As geographical borders widen, these types of services call for the type accuracy and precise planning On
              Time Express has to fulfill any type of logistical need. With our versatile services, we get freight where
              it needs to go, on-time seamlessly from port to receiver.
            </p>
          </div>
        </div>

        <div className='w-1/2 flex justify-end'>
          <Image className='rounded-lg' alt='newLocal' src={tabImg} />
        </div>
      </div>

      <div className='mt-[90px]'>
        <h1 className='text-[40px] font-extrabold tracking-tight'>
          On Time Express FTL <br /> & LTL Solutions Include
        </h1>

        <div className='flex text-xl flex-wrap mt-[28px]'>
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
      </div>
    </div>
  )
}
