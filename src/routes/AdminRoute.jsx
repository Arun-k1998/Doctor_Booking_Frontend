import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AdminLogin from '../pages/admin/Login'
import Bannerpage from '../pages/admin/Bannerpage'
import BannerUpload from '../pages/admin/BannerUpload'
import AdminVerification from '../Authentication/admin/adminAuthentication'
import AdminDashboard from '../pages/admin/Dashboard'
import BannerUpdatePage from '../pages/admin/BannerUpdatePage'

function AdminRoute() {
  return (
    <>
      <Routes>
      <Route element={ <AdminVerification accessBy={'non-Authorized'}><AdminLogin /> </AdminVerification>} path='/login' />
        <Route element={ <AdminVerification accessBy={'Authorized'}> <AdminDashboard /> </AdminVerification>} path='/dashboard' />
        <Route element={<Bannerpage />} path='/banner' />
        <Route element={<BannerUpload />} path='/create_banner' />
        <Route element={<BannerUpdatePage />} path='/banner_u/:id' />
      </Routes>
    </>
  )
}

export default AdminRoute
