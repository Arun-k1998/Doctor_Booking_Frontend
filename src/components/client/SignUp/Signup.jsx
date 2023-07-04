import React, { useEffect, useState } from "react";
import validation from "../../../helper/formValidation";
import api from '../../../helper/axios/userAxios'

function Signup() {
  
  const initialValues = {firstName:'',lastName: '',email:'',countryCode:'',phoneNumber:'',password:'',confirmPassword:''}
  const [formValues,setFormValues] = useState(initialValues)
  const [formError,setformError] = useState({})
  const [submit,setSubmit] = useState(false)
  
  const handleChange = (e)=>{
    const {name,value} = e.target
    setFormValues({...formValues,[name]:value})
    console.log({name,value})
  }

  const handleSubmit = ()=>{
    setformError(validation(formValues))
    setSubmit(true)
  }
  useEffect(()=>{
    if(Object.keys(formError).length === 0 && submit ){
     api.post('/signup',formValues).then((response)=>{
      alert(response.data.message)
     }).catch((error)=>{
      console.log(error.message);
     })
    }
  },[formError])

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img src="" alt="" />
      </div>
      <div className=" flex flex-col  justify-center bg-cyan-600">
        <div className="max-w-[900px] w-ful mx-auto bg-cyan-100 p-8 rounded-lg">
          <p className="text-3xl font-bold ">Create Account</p>
          <div className="formInput mb-2 flex flex-col w-72 ">
            <label htmlFor="">First name</label>
            <input
              className="border-2 border-current rounded-md "
              type="text"
              placeholder="First Name"
              required
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {formError.firstName && <p style={{color:'red'}}>{formError.firstName}</p> }
          </div>
          <div className="formInput mb-2 flex flex-col w-72">
            <label htmlFor="">Last Name</label>
            <input
              className="border-2 border-current rounded-md "
              type="text"
              placeholder="Last Name"
              required
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
            {formError.lastName && <p style={{color:'red'}}>{formError.lastName}</p> }
          </div>
          <div className="formInput mb-2 flex flex-col w-72">
            <label htmlFor="">Email</label>
            <input
              className="border-2 border-current rounded-md "
              type="email"
              placeholder="Email address"
              required
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {formError.email && <p style={{color:'red'}}>{formError.email}</p> }
          </div>
          <div className="formInput mb-2 flex flex-col w-72">
            <label htmlFor="">Phone Number</label>
            <div className="flex">
              
              <select
                className="border-2 border-current rounded-md mr-1"
                id=""
                name="countryCode"
                onChange={handleChange}
              >
                <option value="">Code</option>
                <option value="+91">India +91</option>
                <option value="+1">Canada +1</option>
              </select>

              <input 
                style={{width:'100%'}}
                type="phone"
                placeholder="Phone Number"
                className="border-2 border-current rounded-md "
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
              />
              <div>
              {formError.countryCode && <p style={{color:'red'}}>{formError.countryCode}</p> }
              {formError.phoneNumber && <p style={{color:'red'}}>{formError.phoneNumber}</p> }
              </ div>
            </div>
          </div>
          <div className="formInput mb-2 flex flex-col w-72">
            <label htmlFor=""> Password</label>
            <input
              className="border-2 border-current rounded-md "
              type="password"
              placeholder="Password"
              required
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            {formError.password && <p style={{color:'red'}}>{formError.password}</p> }
          </div>
          <div className="formInput mb-2 flex flex-col w-72">
            <label htmlFor=""> Confirm Password</label>
            <input
              className="border-2 border-current rounded-md "
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            {formError.confirmPassword && <p style={{color:'red'}}>{formError.confirmPassword}</p> }
          </div>
          <div className="formInput mb-2">
            <button className="rounded bg-cyan-500 hover:bg-cyan-600 p-1.5" onClick={handleSubmit}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
