import { Routes,Route } from 'react-router-dom'


import './App.css'

import User from './routes/UserRoute'
import Admin from './routes/AdminRoute'

function App() {
  

  return (
    <div>
      <Routes>
       
       <Route element={<User />} path='/*' />
       <Route element={<Admin />} path='/admin/*' />
      </Routes>
    </div>
  )
}

export default App
