import React from 'react'
import { Routes,Route } from 'react-router-dom'
import DoctorSignup from '../pages/doctor/DoctorSignup'
import DoctorLogin from '../pages/doctor/DoctorLogin'
import DoctorDashboard from '../pages/doctor/DoctorDashboard'
import DoctorRegiteration from '../pages/doctor/DoctorRegiteration'


function DoctorRoute() {
  return (
    <div>
      <Routes>
        <Route element={<DoctorSignup />} path='/signup'  />
        <Route element={<DoctorLogin />} path='/login' />
        <Route element={<DoctorDashboard />} path='/dashboard' />
        <Route element={<DoctorRegiteration />} path='/register' />
       
      </Routes>
    </div>
  )
}

export default DoctorRoute
