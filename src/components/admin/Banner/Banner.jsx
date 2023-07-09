import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminApi } from "../../../helper/axios/adminAxios";
import {MdOutlineDelete} from 'react-icons/md'
import {GrUpdate} from 'react-icons/gr'
function Banner() {
  const navigate = useNavigate();
  const [banner, setBanner] = useState([]);
  const [confrimation,setConfirmation] = useState(false)
  const [bannerId,setBannerId] = useState('')

  const handleDelete = ()=>{
    
    adminApi.delete('/banner',{data:{id:bannerId}}).then((response)=>{
      if(response.data.status){
        alert(response.data.message)
      }
    })

  }
  const deleteClick = (id)=>{
    setBannerId(id)
    setConfirmation(true)
  }

  useEffect(() => {
    adminApi.get("/banner").then((response) => {
      //    console.log(response.data.banners);
      let newData = response.data.banners.map((bannerdoc) => bannerdoc);
      setBanner([...newData]);
    });
  }, []);
  return (
    <div className="flex flex-col bg-sky-50 w-full relative">
      <button
        className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-2xl absolute right-20  top-10"
        onClick={() => navigate("/admin/create_banner")}
      >
        Create Banner
      </button>
      <div className="mt-36 ml-20 flex grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {banner.map((data, index) => {
          return (
            <div
              className="rounded-xl bg-white w-full truncate p-2 shadow-lg"
              key={index}
            >
              <img
                className=" bg-fit rounded-xl"
                src={`http://localhost:4001/images/${data.image}`}
                alt=""
              />
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <div className="flex justify-center flex-col w-full ">
                <button className="bg-sky-500 p-2 rounded-lg mt-3 hidden sm:block" onClick={deleteClick} >Delete</button>
                <button className="bg-sky-500 p-2 rounded-lg mt-3 hidden sm:block">Update</button>
                <button  className="bg-sky-500 p-2 rounded-lg mt-3 block sm:hidden flex justify-center"><MdOutlineDelete /></button>
                <button className="bg-sky-500 p-2 rounded-lg mt-3 block sm:hidden flex justify-center"> <GrUpdate /></button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="fixed inset-0 bg-black opacity-30 flex justify-center items-center flex-col ">
        <div className="bg-white rounded-lg p-10 flex flex-col justify-center items-center  ">
          <div >
          <h1>Delete</h1>
          </div>
          <div className="mt-3">
            <p>Are you Sure You want to delete</p>
          </div>
          <div className="mt-3">
            <button className="bg-red-600 text-white rounded-lg px-4 py-2" onClick={()=> handleDelete()}>Confirm</button>
            <button className="bg-red-600 text-white rounded-lg px-4 py-2 ml-4" onClick={()=> setBannerId(false)} >Cancel</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Banner;
