import React, { useEffect, useState } from "react";
import { adminApi } from "../../../helper/axios/adminAxios";
import { useNavigate } from "react-router-dom";

function DrApplications() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([{}]);
  useEffect(() => {
    adminApi.get("/doctors").then((response) => {
      if (response.data.status) {
        console.log(response.data.doctors);
        setDoctors([...response.data.doctors]);
      }
    });
  }, []);
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
            {doctors.map((doctor,index) => {
              return (
                <>
                  <tr className="bg-white border-b bg-[#a0d6db] dark:border-gray-700 " key={index}>
                    <td className="px-6 py-4">{index+1}</td>
                    <td className="px-6 py-4">{`${doctor.firstName} ${doctor.lastName}`}</td>
                    <td className="px-6 py-4">{doctor.councilName}</td>
                    <td className="px-6 py-4">{doctor.registerNumber}</td>
                    <td
                      className="px-6 py-4 cursor-pointer underline underline-offset-2"
                      onClick={() => navigate("/admin/dr_approval")}
                    >
                      More
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DrApplications;
