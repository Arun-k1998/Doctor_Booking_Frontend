import React, { useEffect, useState } from "react";
import { adminApi } from "../../../helper/axios/adminAxios";
import { useNavigate } from "react-router-dom";

function DrApplications() {
    const [navigate,setNavigate] = useNavigate()
    const [doctors,setDoctors] = useState([{}])
    useEffect(()=>{
        adminApi.get('/doctors').then((response)=>{
            if(response.data.status){
                console.log(response.data.doctors);
                setDoctors([...response.data.doctors])
            }
        })
    },[])
  return (
    <div className="p-4 mt-10">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-xl ">
          <thead className="text-xs text-gray-700 uppercase bg-[#05445E] dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SI No
              </th>
              <th scope="col" className="px-6 py-3">
                Doctor
              </th>
              <th scope="col" className="px-6 py-3">
                Counsil
              </th>
              <th scope="col" className="px-6 py-3">
                Register Number
              </th>
              <th scope="col" className="px-6 py-3">
                view
              </th>
            </tr>
          </thead>
          <tbody>

            <tr className="bg-white border-b bg-[#a0d6db] dark:border-gray-700 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4" onClick={()=> navigate('/admin/dr_approval')}>More</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DrApplications;
