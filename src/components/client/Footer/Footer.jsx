import React from 'react'
import icon from '../../../assets/logo/medweblogo.png'

function Footer() {
  return (
    <div className='w-full bg-[#189AB4] mt-10 grid grid-cols-3 flex justify-center' >
        <div className='flex justify-center'>
            <p>hello</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <div>
          <p>hai</p>
          </div>
          
          <div className=' w-20 md:w-60'>
          <img src={icon} alt="" className='w-full h-full' />
          </div>
            
        </div>
        <div className='flex justify-center' >
          <p>hai</p>
        </div>
    </div>
  )
}

export default Footer
