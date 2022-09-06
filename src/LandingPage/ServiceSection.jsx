import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, } from '@fortawesome/free-solid-svg-icons'


const ServiceSection = () => {
  return (
    <main className='min-h-screen'>
      <h3 className='text-center text-4xl font-semibold uppercase text-white'>Our Service</h3>
      <section className='sm:grid-cols-3 text-center sm:grid space-x-6 px-8 py-6'>

        <div className='bg-servicecardbg p-3 rounded-md border-2 border-amber-900 m-3'>
          <div className=''>
            <img className='rounded-xl' src="https://i.ibb.co/w6K9vwz/coffeemachine.jpg" alt="" />
          </div>
          <div className=''><h2 className='text-2xl text-center text-white p-3'>Coffee Machine</h2></div>
          <div className='border-amber-900 border-2 mx-auto rounded-full w-fit'><button className='border-0 text-lg py-2 px-3'><FontAwesomeIcon icon={faHeart} className="text-white"/></button></div>
        </div>
        

        <div className='bg-servicecardbg p-3 rounded-md border-2 border-amber-900 m-3 row-span-2'>
          <div className='h-5/6'>
            <img className='rounded-xl h-full'  src="https://i.ibb.co/VQxDsSX/coffeewhite.jpg" alt="" />
          </div>
          <div className="py-3">
            <div className=''><h2 className='text-2xl text-center text-white p-3'>Coffee Bean</h2></div>
            <div className='border-amber-900 border-2 mx-auto rounded-full w-fit'><button className='border-0 text-lg py-2 px-3'><FontAwesomeIcon icon={faHeart} className="text-white"/></button>
            </div>
          </div>
        </div>


        <div className='bg-servicecardbg p-3 rounded-md border-2 border-amber-900 m-3'>
          <div className=''>
            <img className='rounded-xl' src="https://i.ibb.co/K6BgKsp/coffeecup.webp" alt="" />
          </div>
          <div className=''><h2 className='text-2xl text-center text-white p-3'>Black Coffee</h2></div>
          <div className='border-amber-900 border-2 mx-auto rounded-full w-fit'><button className='border-0 text-lg py-2 px-3'><FontAwesomeIcon icon={faHeart} className="text-white"/></button></div>
        </div>


        
      <div className='bg-servicecardbg p-3 rounded-md border-2 border-amber-900 m-3'>
          <div className=''>
            <img className='rounded-xl' src="https://i.ibb.co/94bZjm6/coffeetypes.jpg" alt="" />
          </div>
          <div className=''><h2 className='text-2xl text-center text-white p-3'>Many Types</h2></div>
          <div className='border-amber-900 border-2 mx-auto rounded-full w-fit'><button className='border-0 text-lg py-2 px-3'><FontAwesomeIcon icon={faHeart} className="text-white"/></button></div>
        </div>

        


        <div className='bg-servicecardbg p-3 rounded-md border-2 border-amber-900 m-3 row-span-2'>
          <div className='h-5/6'>
            <img className='rounded-xl h-full'  src="https://i.ibb.co/cCvrjsG/coffeelatte.jpg" alt="" />
          </div>
          <div className="py-3">
            <div className=''><h2 className='text-2xl text-center text-white p-3'>Coffee Latte</h2></div>
            <div className='border-amber-900 border-2 mx-auto rounded-full w-fit'><button className='border-0 text-lg py-2 px-3'><FontAwesomeIcon icon={faHeart} className="text-white"/></button>
            </div>
          </div>
        </div>


        <div className='bg-servicecardbg p-3 rounded-md border-2 border-amber-900 m-3 col-span-2'>
          <div className=''>
            <img className='rounded-xl' src="https://i.ibb.co/FWCcM9v/coffeeingrad.jpg" alt="" />
          </div>
          <div className=''><h2 className='text-2xl text-center text-white p-3'>Coffee Ingredients</h2></div>
          <div className='border-amber-900 border-2 mx-auto rounded-full w-fit'><button className='border-0 text-lg py-2 px-3'><FontAwesomeIcon icon={faHeart} className="text-white"/></button></div>
        </div>

      </section>
    </main>
  )
}

export default ServiceSection