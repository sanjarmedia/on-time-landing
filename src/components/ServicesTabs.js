import { equals } from 'ramda'
import React, { useState } from 'react'
import { ServicesTab1 } from './ServicesTab1'
import { ServicesTab2 } from './ServicesTab2'
import { ServicesTab3 } from './ServicesTab3'
import { ServicesTab4 } from './ServicesTab4'

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(1)

  const activeTabClassName = 'border-line-background cursor-pointer'
  const noActiveTabClassName = 'border-orange-color'
  const tabClassName = `w-1/4 pb-10 border-b-[6px] flex-col justify-start flex items-center transition duration-500 ease-in-out `

  return (
    <div className='mt-40 px-16 font-helvetica font-bold'>
      <div className='flex'>
        <div
          onClick={() => setActiveTab(1)}
          className={`${tabClassName} ${equals(activeTab, 1) ? noActiveTabClassName : activeTabClassName}`}
        >
          <div>
            <span className='text-2xl	text-gray-color'>01.</span>

            <p className='text-3xl'>
              Full Track load & Less <br />
              Than Truckload
            </p>
          </div>
        </div>

        <div
          onClick={() => setActiveTab(2)}
          className={`${tabClassName} ${equals(activeTab, 2) ? noActiveTabClassName : activeTabClassName}`}
        >
          <div>
            <span className='text-2xl	text-gray-color'>02.</span>
            <p className='text-3xl'>Drayage</p>
          </div>
        </div>

        <div
          onClick={() => setActiveTab(3)}
          className={`${tabClassName} ${equals(activeTab, 3) ? noActiveTabClassName : activeTabClassName}`}
        >
          <div>
            <span className='text-2xl	text-gray-color'>03.</span>
            <p className='text-3xl'>
              Straight Truck <br /> With Left Gate
            </p>
          </div>
        </div>

        <div
          onClick={() => setActiveTab(4)}
          className={`${tabClassName} ${equals(activeTab, 4) ? noActiveTabClassName : activeTabClassName}`}
        >
          <div>
            <span className='text-2xl	text-gray-color'>04.</span>
            <p className='text-3xl'>Warehousing</p>
          </div>
        </div>
      </div>

      {equals(activeTab, 1) && (
        <div className='waves'>
          <ServicesTab1 />
        </div>
      )}
      {equals(activeTab, 2) && (
        <div className='waves'>
          <ServicesTab2 />
        </div>
      )}
      {equals(activeTab, 3) && (
        <div className='waves'>
          <ServicesTab3 />
        </div>
      )}
      {equals(activeTab, 4) && (
        <div className='waves'>
          <ServicesTab4 />
        </div>
      )}
    </div>
  )
}
