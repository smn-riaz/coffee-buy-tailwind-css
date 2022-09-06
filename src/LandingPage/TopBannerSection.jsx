import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const TopBannerSection = () => {
  return (
    <main className='sm:min-h-screen sm:py-14 py-6'>
            <div className='sm:flex sm:flex-row'>
                <div className='sm:basis-1/2 p-14 space-y-10'>
                   <div className='space-y-4 '>
                        <h1 className="sm:text-8xl text-6xl font-semibold text-white uppercase">Coffee</h1>
                        <h5 className='uppercase text-2xl text-white'>Service for office breakrooms and free delivery</h5>
                   </div>
                    <button className='border-2 text-xl rounded-3xl px-6 py-2 border-[#803b28] uppercase text-white'><FontAwesomeIcon className="px-2" icon={faShoppingCart} /> Shop now</button>
                </div>
                <div className='w-full sm:basis-1/2'>
                    <img src="https://i.ibb.co/hRK3MZD/cup.png" className="mr-8" alt="" />
                </div>
            </div>
    </main>
  )
}

export default TopBannerSection