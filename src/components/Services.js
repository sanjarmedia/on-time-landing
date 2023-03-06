import { ServicesTabs } from './ServicesTabs'
import { Accordions } from './Accordions'
import { Element } from 'react-scroll'

export function Services() {
  return (
    <Element name='services' className=' lg:px-32 m-auto mt-52'>
      <div className='text-xl flex justify-center'>
        <div className='text-2xl text-gray-color'>
          02.
          <br />
          <h1 className='text-orange-color text-8xl'>
            <i>our</i> <br /> services
          </h1>
        </div>
      </div>

      <div className='px-10 lg:px-16 lg:flex items-start justify-between text-xl mt-32 font-helvetica'>
        <p className='lg:w-4/12 flex justify-start'>
          On Time Express provides exceptional customer service by creating value beyond the traditional ways of freight
          forwarding and management. We create a flexible and unique approach for each customers needs and service all
          areas of the supply chain from drayage and warehouse storage, to loading services and direct deliveries,
          nationwide.
        </p>

        <p className='lg:w-4/12 mt-10 lg:mt-0'>
          Our expansive logistic services, combined with our focus on organization using our integrated IT platform
          equips us with the capability to maximize communication and direct tracking accessibility with our customers
          while giving us the base to lower the cost of the entire supply chain without losing the integrity of our
          performance.
        </p>

        <p></p>
      </div>

      <div className='hidden lg:inline'>
        <ServicesTabs />
      </div>

      <div className='inline lg:hidden'>
        <Accordions />
      </div>
    </Element>
  )
}
