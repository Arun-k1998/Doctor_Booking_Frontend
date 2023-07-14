import React, { useContext, useEffect, useState } from "react";
import { doctorApi } from "../../../helper/axios/doctorAxios";
import { doctorContext } from "../../../helper/contest/DoctorContext";

function DocRegisterationForm() {
  const [doctor, setDoctor] = useState({});
  const { id } = useContext(doctorContext);

  const [experience, setExperience] = useState([{}]);
  const [specialization, setSpecilaization] = useState([{}]);
  const [specializationField, setSpecializationFiled] = useState([{}]);
  const initialValues = {
    id:id,
    registerNumber: "",
    counsilName: "",
    yearOfRegisteration: "",
    specialization: "",
    Age: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const inputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const addMore = () => {
    setExperience([...experience, {}]);
  };

  const onChangeExperience = (e, index) => {
    const { name, value } = e.target;
    const spec = [...experience];
    spec[index][name] = value;
    setExperience([...spec]);
    console.log(setExperience);
  };

  const handleSubmit = () => {
    alert("here");
    doctorApi
      .post("/register", { formValues: formValues, experience: experience })
      .then((response) => {
        if (response.data.status) {
          alert(response.data.message);
        }
      });
  };

  useEffect(() => {
    doctorApi.get(`/register/?id=${id}`).then((response) => {
      if (response.data.status) {
        setDoctor(response.data.doctor);
        setSpecilaization([...response.data.specialization]);
        console.log(specializationField);
      }
    });
  }, []);

  return (
    <div className="p-10 bg-slate-200">
      <div className="mx-auto bg-white rounded-lg p-5 ">
        <div className="grid grid-cols-[2fr_8fr]">
          <div className="rounded-full overflow-hidden ">
            <img
              src="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863"
              alt=""
              className=" "
            />
            {/* <div>
            <button className="bg-red-700">add</button>

            </div> */}
          </div>
          <div className="flex flex-col  ml-40 w-1/2">
            <div className="flex grid grid-cols-3">
              <p>Full Name</p>
              <span>:</span>
              <p className="mb-4">
                {" "}
                {doctor?.firstName + " " + doctor?.lastName}
              </p>
            </div>
            <div className="flex grid grid-cols-3">
              <p>Phone Number</p>
              <span>:</span>
              <p className="mb-4"> {doctor?.phoneNumber}</p>
            </div>
            <div className="flex grid grid-cols-3">
              <p>Email </p>
              <span>:</span>
              <p className="mb-4"> {doctor?.email}</p>
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <div>
          <div className="grid grid-cols-2">
            <div className="w-full">
              <div>
                <h2>Registeraton Details</h2>
                
                <div className="grid grid-cols-3">
                  <label htmlFor="">Register Number</label>
                  <input
                    type="text"
                    onChange={(e) => inputChange(e)}
                    value={formValues.registerNumber}
                    name="registerNumber"
                    className="border-2 p-1 mb-2"
                  />
                </div>
              
              <div className="grid grid-cols-3">
                <label htmlFor="">Counsil Name</label>
                <input
                  type="text"
                  onChange={(e) => inputChange(e)}
                  value={formValues.counsilName}
                  name="counsilName"
                  className="border-2 p-1 mb-2"
                />
              </div>
              <div className="grid grid-cols-3">
                <label htmlFor="">Year of Registeration</label>
                <input
                  type="date"
                  onChange={(e) => inputChange(e)}
                  value={formValues.yearOfRegisteration}
                  name="yearOfRegisteration"
                  className="border-2 p-1 mb-2 "
                />
              </div>
            </div>
            <hr className="my-4 " />

            <div className="grid grid-cols-3" >
              <label htmlFor="">Specialization</label>
              <select
                name="specialization"
                onChange={(e) => inputChange(e)}
                id=""
                className="border-2 p-1 mb-2 "
              >
                <option value="">Specialization</option>
                {specialization.map((Specialization) => {
                  return (
                    <option value={Specialization._id}>
                      {Specialization.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="grid grid-cols-3">
              <label htmlFor="">Age</label>
              <input
                type="number"
                onChange={(e) => inputChange(e)}
                value={formValues.Age}
                name="Age"
                className="border-2 p-1 mb-2 "
              />
            </div>
            <div className="grid grid-cols-3">
              <label htmlFor="">Langauges Known</label>
              <input type="text" onChange={(e) => inputChange(e)} name="languages" className="border-2 p-1 mb-2" />
            </div>
            <div>
              <div>
                <h2>Experiences</h2>
              </div>
              <div>


              </div>
              {experience.map((ele, index) => {
                return (
                  <div key={index} className="flex " >
                    <div className="">
                      <label htmlFor="">Hostpital</label>
                      <input
                        type="text"
                        name="hospital"
                        onChange={(e) => onChangeExperience(e, index)}
                        className="border-2 p-1 mb-2 "
                      />
                    </div>

                    <div className="">
                      <label htmlFor="">From</label>
                      <input
                        type="date"
                        name="from"
                        onChange={(e) => onChangeExperience(e, index)}
                        className="border-2 p-1 mb-2"

                      />
                    </div>
                    <div className="" >
                      <label htmlFor="">to</label>
                      <input
                        type="date"
                        name="to"
                        onChange={(e) => onChangeExperience(e, index)}
                        className="border-2 p-1 mb-2"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          <button onClick={addMore} className="bg-lime-500 p-2" >Add More</button>

          </div>
          
        </div>
        <div className="w-full flex justify-center ">
        <button onClick={handleSubmit} className="bg-white p-2">
            {" "}
            Submit{" "}
          </button>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default DocRegisterationForm;
