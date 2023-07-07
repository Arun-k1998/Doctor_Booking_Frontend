import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminApi } from "../../../helper/axios/adminAxios";
import {MdOutlineDelete} from 'react-icons/md'
import {GrUpdate} from 'react-icons/gr'
function Banner() {
  const navigate = useNavigate();
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    adminApi.get("/banner").then((response) => {
      //    console.log(response.data.banners);
      let newData = response.data.banners.map((bannerdoc) => bannerdoc);
      setBanner([...newData]);
    });
  }, []);
  return (
    <div className="flex flex-col bg-sky-50 w-full">
      <button
        className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-2xl absolute right-20 top-20"
        onClick={() => navigate("/admin/create_banner")}
      >
        Create Banner
      </button>
      <div className="mt-36 ml-20 flex grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {banner.map((data, index) => {
          return (
            <div
              className="rounded-xl bg-white w-full truncate p-2"
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
                <button className="bg-sky-500 p-2 rounded-lg mt-3 hidden sm:block">Delete</button>
                <button className="bg-sky-500 p-2 rounded-lg mt-3 hidden sm:block">Update</button>
                <button  className="bg-sky-500 p-2 rounded-lg mt-3 block sm:hidden flex justify-center"><MdOutlineDelete /></button>
                <button className="bg-sky-500 p-2 rounded-lg mt-3 block sm:hidden flex justify-center"> <GrUpdate /></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Banner;
