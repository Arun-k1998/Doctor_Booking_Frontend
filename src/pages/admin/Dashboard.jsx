import React,{ useContext } from 'react'
import AdminNavbar from '../../components/admin/navbar/AdminNavbar'
import Sidebar from '../../components/admin/sideBar/Sidebar'
import userContest from '../../helper/contest/UserContest'

function Dashboard() {
  const {data} = useContext(userContest)
  return (
    <div>
        <AdminNavbar />
        <Sidebar />
        <p>{data}</p>
    </div>
  )
}

export default Dashboard
