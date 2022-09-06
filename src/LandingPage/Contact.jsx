import React from 'react'

const Contact = () => {
  return (
    <main className='min-h-screen'>
        <section>
          <div><h2 className='text-4xl uppercase text-white'>Contact Us</h2></div>
        </section>
        <section>
          <div className='flex justify-between align-middle'>
            <div className='formcontainer'>
              <div className='grid grid-rows-2'>
                <h3 className=''>Email:</h3>
                <p className=''><input type="text" /></p>
              </div>
              <div className='flex flex-row'>
                <h3>Phone:</h3>
                <p><input type="tel" /></p>
              </div>
              <div className='flex flex-row'>
                <h3>Address:</h3>
                <p><input type="text" /></p>
              </div>
            </div>
            <div className='socialcontainer'>

            </div>
          </div>
        </section>
    </main>
  )
}

export default Contact