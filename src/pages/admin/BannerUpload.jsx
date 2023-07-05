import React from 'react'
import Navbar from '../../components/client/navbar/Navbar'
import AdminNavbar from '../../components/admin/navbar/AdminNavbar'
import Sidebar from '../../components/admin/sideBar/Sidebar'
import BannerCreatoin from '../../components/admin/BannerCreation/BannerCreatoin'

function BannerUpload() {
  return (
    <div>
        <AdminNavbar />
        <div className='flex w-full bg-sky-50 h-[93vh]'>
            <Sidebar />
            <div className='flex w-full justify-center items-center '>
            <BannerCreatoin />
            </div>
        </div>
    </div>
  )
}

export default BannerUpload