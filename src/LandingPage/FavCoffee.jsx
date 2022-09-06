import React from 'react'

const FavCoffee = () => {
  return (
    <main className='min-h-screen p-5'>
        <section className='p-5'>
            <div>
                <h2 className='text-white text-2xl'>Enjoy Your Coffee in our comfortable place</h2>
                <div className='w-2/3 flex flex-row py-8 space-x-8'>
                    <div className='basis-1/3'>
                        <h2 className='text-white text-4xl'>50+</h2>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam tenetur maiores.</p>
                    </div>
                    <div className='basis-1/3'>
                        <h2 className='text-white text-4xl'>80+</h2>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam tenetur maiores.</p>
                    </div>
                    <div className='basis-1/3'>
                        <h2 className='text-white text-4xl'>10+</h2>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam tenetur maiores.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='p-5'>
            <div className='sm:flex sm:flex-row sm:space-x-14'>
                <div className='basis-1/2'>
                <img src="https://i.ibb.co/GRq4Z6x/coffeefav.jpg" className="border-white border-2" alt="" />
                </div>
                <div className='basis-1/2 space-y-5'>
                    <div>
                        <h3 className='text-yellow-900 uppercase text-md font-bold'>Our coffee</h3>
                        <h1 className='text-white text-3xl'>Choose Your Favourite Coffee</h1>
                    </div>
                    <div>
                        <p className='text-white'>More than 100+ types of Coffee are ready to serve by our professionals.</p>
                    </div>
                    <div className='flex flex-row space-x-10'>
                        <div>
                            <h2 className='font-semibold text-yellow-900 text-2xl font-serif'>Cappucino</h2>
                        </div>
                        <div>
                            <h2 className='font-semibold text-white text-2xl font-serif'>Late</h2>
                        </div>
                        <div>
                            <h2 className='font-semibold text-white text-2xl font-serif'>Arabica</h2>
                        </div>
                    </div>
                    <div>
                        <p className='text-white underline-offset-2'><u>More menu</u></p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default FavCoffee