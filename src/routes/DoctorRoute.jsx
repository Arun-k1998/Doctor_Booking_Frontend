import React from 'react'
import { Routes,Route } from 'react-router-dom'
import DoctorSignup from '../pages/doctor/DoctorSignup'

function DoctorRoute() {
  return (
    <div>
      <Routes>
        <Route element={<DoctorSignup />} path='/signup'  />
      </Routes>
    </div>
  )
}

export default DoctorRoute
