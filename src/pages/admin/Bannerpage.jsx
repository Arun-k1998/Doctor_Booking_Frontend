import React from "react";
import Navbar from "../../components/client/navbar/Navbar";
import Sidebar from "../../components/admin/sideBar/Sidebar";
import Banner from "../../components/admin/Banner/Banner";
import AdminNavbar from "../../components/admin/navbar/AdminNavbar";

function Bannerpage() {
  return (
    <div>
      <AdminNavbar />
      <div className=" flex relative">
        <Sidebar />
        
          <Banner />
       
      </div>
    </div>
  );
}

export default Bannerpage;
