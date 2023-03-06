import Image from 'next/image'
import tabImg from '../../public/tab-4.png'

export function ServicesTab4() {
  return (
    <div className='mt-[100px]'>
      <div className='flex justify-between'>
        <div className='w-[550px] text-xl font-normal'>
          <p className='text-5xl	font-extrabold pb-[60px] tracking-tight'>Warehousing</p>
          <div>
            <p className='pb-[40px]'>
              With our background in logistics and previous experience as a carrier company, On Time Express understands
              that warehousing is a key component to the supply chain. Our warehouse management solutions are tailored
              to meet any customers particular requirements in providing flexible warehouse solutions that are organized
              and reliable.
            </p>

            <p className='pb-[40px]'>
              Our On Time Express Warehouse is conveniently located in Ontario California, just 25 miles outside of Los
              Angeles, making accessibility anywhere from the la county to the inland empire effortless. Our warehouse
              services are open 24/7, have non-stop recorded surveillance, and are staffed with a forklift certified
              crew making any job possible. From keeping inventory and load transfers to restacking and re-wrapping
              pallets, our hard working and experienced faculty are willing to go the extra mile to ensure customer
              satisfaction.
            </p>

            <p>
              For a seamless transition in the movements of your cargo, On Time’s warehousing, inventory management, and
              real time tracking of cargo is the way to go!
            </p>
          </div>
        </div>

        <div className='w-1/2 flex justify-end'>
          <Image className='rounded-lg' alt='newLocal' src={tabImg} />
        </div>
      </div>
    </div>
  )
}
