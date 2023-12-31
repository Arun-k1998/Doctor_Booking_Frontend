import React from 'react'
import Navbar from '../../components/doctor/Navbar/Navbar'
import Sidebar from '../../components/admin/sideBar/Sidebar'
import DrApplicationDetalis from '../../components/admin/DrApplicationDetails/DrApplicationDetalis'

function DoctorApproval() {
  return (
    <div>
        <Navbar />
        <div className="grid grid-cols-[1fr_7fr] sm:grid-cols-[1.5fr_8.5fr] w-full">
        <Sidebar />
       <DrApplicationDetalis />
       
      </div>
    </div>
  )
}

export default DoctorApproval
