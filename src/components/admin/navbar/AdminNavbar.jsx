import React from 'react'
import {MdOutlineNotifications} from 'react-icons/md'
import { adminApi } from '../../../helper/axios/adminAxios'
import { useNavigate } from 'react-router-dom'
function AdminNavbar() {
  const navigate = useNavigate()
 function logOut(){
    const expires = "expires=" + 'Thu, 01 Jan 1970 00:00:01 GMT';
    // Thu, 01 Jan 1970 00:00:01 GMT
    document.cookie =
    "adminToken=Bearer"+";" + expires + "; path=/admin";;
        navigate('/admin/login')
     
  }
  return (
    <div className='grid grid-cols-[3fr_7fr] sm:grid-cols-[1.5fr_8.5fr] w-full bg-sky-900  '>
        <div className='ml-9 h-full py-4'>
            <h2>MED WEB</h2>
        </div>
        <div className='flex flex-row justify-end mr-9 h-full items-center py-4 '>
            <MdOutlineNotifications className='mt-1 sm:mt-3 md:mt-1' />
            <button className=' bg-slate-300 p-2 rounded-lg ml-6' onClick={logOut} >Logout</button>
        </div>
    </div>
  )
}

export default AdminNavbar
