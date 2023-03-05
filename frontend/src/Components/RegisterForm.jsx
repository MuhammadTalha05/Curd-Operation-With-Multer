import React, { useState } from "react";
import {registerUser} from '../Services/api';
import { useNavigate } from "react-router-dom";


const RegisterForm = () => {

  const nevigate = useNavigate();

  const [data,setData] = useState({
    userName:"",
    imageUpload:null,
  })

  const formHadler = (e)=>{
    // console.log(e.target.value);
    // console.log(e.target.files[0]); 
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    const name = e.target.name;

    setData({...data, [name]:value})
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    const formdata = new FormData()
    formdata.append('username', data.userName)
    formdata.append('imageUpload', data.imageUpload)

    const config= {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }
    registerUser(data,config);
    nevigate('/')
  }

  return (
    <div className="container mt-4 mb-4">
      <h1 className="text-center">Upload Your Details Here</h1>
      <div className="row mt-5">
        <div className="col-md-12">
          <form>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                User Name
              </label>
              <input
                type="email"
                className="form-control"
                id="userName"
                name="userName"
                onChange={formHadler}
              />
          
            </div>
            <div className="mb-3">
              <label htmlFor="imageUpload" className="form-label">
                Select Your Image
              </label>
              <input
                type="file"
                className="form-control"
                id="imageUpload"
                name="imageUpload"
                onChange={formHadler}
              />
            </div>
            <button type="submit" className="btn btn-dark btn-lg w-100" onClick={submitHandler}>
              SAVE DATA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
