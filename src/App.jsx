import { Routes,Route } from 'react-router-dom'
import Register from './pages/client/Signup'
import UserLogin from './pages/client/Login'
import AdminLogin from './pages/admin/Login'
import AdminNavbar from './pages/admin/Dashboard'
import './App.css'
import Navbar from './components/client/navbar/Navbar'
import Bannerpage from './pages/admin/Bannerpage'
import BannerUpload from './pages/admin/BannerUpload'


function App() {
  

  return (
    <div>
      <Routes>
        {/* User */}
        <Route element={<Navbar />} path='/' />
        <Route element={<UserLogin />} path='/login' />
        <Route element={ <Register />} path='/signup' />

        {/* Admin */}
        <Route element={<AdminLogin />} path='/admin/login' />
        <Route element={<AdminNavbar />} path='/admin/dashboard' />
        <Route element={<Bannerpage />} path='/admin/banner' />
        <Route element={<BannerUpload />} path='/admin/create_banner' />
      </Routes>
    </div>
  )
}

export default App
