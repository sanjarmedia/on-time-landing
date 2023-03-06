import Image from 'next/image'
import tabImg from '../../public/tab-3.png'

export function ServicesTab3() {
  return (
    <div className='mt-[100px]'>
      <div className='flex justify-between'>
        <div className='w-[550px] text-xl font-normal'>
          <p className='text-5xl	font-extrabold pb-[60px] tracking-tight'>
            Straight Truck <br />
            With Left Gate
          </p>
          <div>
            <p className='pb-[40px]'>
              IOn Time Express understands that no one customer has the same logistical needs when it comes to their
              cargo. Given the amount complexity required for some customers to successfully receive their freight, we
              go the extra mile to try to cover as many methods of transportation possible, including straight truck
              services. On Time Express has a fleet of straight trucks all equipped with the features of lift gate,
              pallet jack, 26’ ft in length, and dock height.
            </p>

            <p>
              The straight truck solutions our company provides bring value to our customers by allowing them to service
              a wider range of clientele, no matter what loading situations come at hand. Our fleet along with our
              experienced driving staff are extremely useful for shippers or receivers that do not have traditional
              loading docks or forklifts needed to get their freight where it needs to go.
            </p>
          </div>
        </div>

        <div className='w-1/2 flex justify-end'>
          <Image className='rounded-lg' alt='newLocal' src={tabImg} />
        </div>
      </div>

      <div className='mt-[90px]'>
        <h1 className='text-[40px] font-extrabold tracking-tight'>
          On Time Express Straight Truck Services <br />
          Include Cargo Movement to
        </h1>

        <div className='flex text-xl flex-wrap mt-[28px]'>
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
      </div>
    </div>
  )
}
