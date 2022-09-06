import React from 'react'


const CoffeeTypes = () => {
  return (
    <main className='min-h-screen py-5'>
      <h3 className='text-center text-4xl font-semibold uppercase text-white'>Coffee Latte</h3>
      <section className='sm:grid-cols-3 sm:grid sm:space-x-6 p-6'>

        <div className='bg-servicecardbg rounded-md border-2 p-3 sm:p-0 border-amber-900  m-3'>
          <div className='h-3/4'>
            <img className='rounded-xl h-full mx-auto w-full' src="https://i.ibb.co/NZpjy64/latte1.png" alt="" />
          </div>
          <div className=''><h2 className='text-2xl text-center text-white'>Coffee Latte1</h2></div>
          
        </div>


        <div className='bg-servicecardbg rounded-md border-2 p-3 sm:p-0 border-amber-900  m-3'>
          <div className='h-3/4'>
            <img className='rounded-xl h-full mx-auto w-full' src="https://i.ibb.co/gVW5DMj/latte2.png" alt="" />
          </div>
          <div className=''><h2 className='text-2xl text-center text-white'>Coffee Latte2</h2></div>
          
        </div>


        <div className='bg-servicecardbg rounded-md border-2 p-3 sm:p-0 border-amber-900  m-3'>
          <div className='h-3/4'>
            <img className='rounded-xl h-full mx-auto w-3/4' src="https://i.ibb.co/4Fxz7Wr/latte3.png" alt="" />
          </div>
          <div className=''><h2 className='text-2xl text-center text-white'>Coffee Latte3</h2></div>
        </div>
        
        

      </section>
    </main>
  )
}

export default CoffeeTypes