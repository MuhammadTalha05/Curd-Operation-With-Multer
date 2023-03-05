import React, {useEffect, useState } from "react";
import {getdata,deletedatas} from '../Services/api'

const Cards = () => {

  const [data, setData] = useState([]);

  const getAllUsers = async()=>{
    const res = await getdata()
    setData(res.data.data);
  }


  const deleteusers = (id)=>{
    deletedatas(id);
  }


  // deleteusers()


  // console.log(data);

  useEffect(()=>{
    getAllUsers();
  },[deleteusers])
  

 
  return (
    <div className="container mt-4 mb-4">
      <h1 className="text-center">MERN Image Upload Project</h1>
      <div className="row mt-5 mb-5">
      {
        data.length > 0 ?data.map((val)=>{
          return (
            <div className="col-lg-3 col-md-4 d-flex flex-wrap mb-4" key={val._id}>
          <div className="card " style={{ width: "16rem"}}>
            <img src={`http://localhost:8000/uploads/${val.imagePath}`} className="card-img-top mx-auto" alt="..."  style={{width:"70%"}}/>
            <div className="card-body text-center">
              <h5 className="card-title">{val.userName}</h5>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              <button onClick={()=>deleteusers(val._id)} className="btn btn-danger" >
                Delete User
              </button>
            </div>
          </div>
        </div>
          )
        }) : ""
      }
        
      </div>
    </div>
  );
};

export default Cards;
