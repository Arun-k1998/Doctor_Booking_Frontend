import React from 'react'
import {MdOutlineNotifications} from 'react-icons/md'
function AdminNavbar() {
  return (
    <div className='grid grid-cols-[3fr_7fr] sm:grid-cols-[1.5fr_8.5fr] w-full bg-sky-900  '>
        <div className='ml-9 h-full py-4'>
            <h2>MED WEB</h2>
        </div>
        <div className='flex flex-row justify-end mr-9 h-full py-4 '>
            <MdOutlineNotifications className='mt-1 sm:mt-3 md:mt-1' />
            <button className=' ml-6'>Logout</button>
        </div>
    </div>
  )
}

export default AdminNavbar
