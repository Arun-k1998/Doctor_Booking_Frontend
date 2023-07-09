import React from "react";
import "./cards.css";

function Cards() {

  return (
    <div>
      <div  className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-20 mt-10 overflow-x-scroll overflow-y-hidden">
        <div className=" rounded-lg shadow-2xl overflow-hidden  text-center">
          <div>
            <img
              src="https://www.shashwathospitalaundh.in/wp-content/uploads/2021/09/ENT.png"
              alt=" "
              className=" "
            />
          </div>
          <div className="p-2">
            <p className="mt-3">hello</p>
            <button className="mt-2">Consult Now</button>
          </div>
        </div>
        <div className=" rounded-lg shadow-2xl overflow-hidden  text-center">
          <div>
            <img
              src="https://www.shashwathospitalaundh.in/wp-content/uploads/2021/09/ENT.png"
              alt=""
              className=""
            />
          </div>
          <div className="p-2">
            <p className="mt-3">hello</p>
            <button className="mt-2">Consult Now</button>
          </div>
        </div>
        <div className=" rounded-lg shadow-2xl overflow-hidden  text-center">
          <div>
            <img
              src="https://www.shashwathospitalaundh.in/wp-content/uploads/2021/09/ENT.png"
              alt=""
              className=""
            />
          </div>
          <div className="p-2">
            <p className="mt-3">hello</p>
            <button className="mt-2">Consult Now</button>
          </div>
        </div>
        <div className=" rounded-lg shadow-2xl overflow-hidden  text-center">
          <div>
            <img
              src="https://www.shashwathospitalaundh.in/wp-content/uploads/2021/09/ENT.png"
              alt=""
              className=""
            />
          </div>
          <div className="p-2">
            <p className="mt-3">hello</p>
            <button className="mt-2">Consult Now</button>
          </div>
        </div>
        <div className=" rounded-lg shadow-2xl overflow-hidden  text-center">
          <div>
            <img
              src="https://www.shashwathospitalaundh.in/wp-content/uploads/2021/09/ENT.png"
              alt=""
              className=""
            />
          </div>
          <div className="p-2">
            <p className="mt-3">hello</p>
            <button className="mt-2">Consult Now</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Cards;
