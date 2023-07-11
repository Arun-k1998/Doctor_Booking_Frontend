import React from "react";
import "./cards.css";

function Cards() {

  return (
    <div>
      <div  className="mt-5 horizontal_scroll bg-[#D4F1F4] py-28 px-20 Specialities">
        <h1 className=" mb-5 font-bold text-3xl">Specialities</h1>
        <h2 className=" mb-5" >Consult with docotors as per your need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-scroll overflow-y-hidden py-8">
        <div className=" rounded-lg bg-white overflow-hidden text-center">
          <div>
            <img
              src="https://www.shashwathospitalaundh.in/wp-content/uploads/2021/09/ENT.png"
              alt=" "
              className=" "
            />
          </div>
          <div className="px-2 py-4">
            <p className="mt-3">General Medicine</p>
            <button className="update_button mt-2">Consult Now</button>
          </div>
        </div>
        <div className=" rounded-lg bg-white   overflow-hidden  text-center">
          <div>
            <img
              src="https://www.shashwathospitalaundh.in/wp-content/uploads/2021/09/ENT.png"
              alt=""
              className=""
            />
          </div>
          <div className="px-2 py-4">
            <p className="mt-3">ENT</p>
            <button className="update_button mt-2">Consult Now</button>
          </div>
        </div>
        <div className=" rounded-lg bg-white   overflow-hidden  text-center">
          <div>
            <img
              src="https://www.shashwathospitalaundh.in/wp-content/uploads/2021/09/ENT.png"
              alt=""
              className=""
            />
          </div>
          <div className="px-2 py-4">
            <p className="mt-3">Dermatology</p>
            <button className="update_button mt-2">Consult Now</button>
          </div>
        </div>
        <div className=" rounded-lg bg-white   overflow-hidden  text-center">
          <div>
            <img
              src="https://www.shashwathospitalaundh.in/wp-content/uploads/2021/09/ENT.png"
              alt=""
              className=""
            />
          </div>
          <div className="px-2 py-4">
            <p className="mt-3">Psychiatry</p>
            <button className="update_button mt-2">Consult Now</button>
          </div>
        </div>
      </div>
        </div>
        
    </div>
  );
}

export default Cards;
