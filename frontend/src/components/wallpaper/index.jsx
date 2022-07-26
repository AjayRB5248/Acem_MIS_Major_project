import React, { useEffect, useState } from "react";
import "./style.css";
import image from "../../assets/ajay.jpg";
import { useHistory } from "react-router";

const Index = () => {
  const history = useHistory();
  const [StudentData,setStudentData]=useState();

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };
   useEffect(()=>{
    StudentInformation();
   },[])

  const StudentInformation= async ()=>{
    try{
      const res= await fetch('/Login/:id',{
        method:'GET',
        headers:{
          Accept:'application/json',
          "Content-Type":'application/json'
        },
        credentials:"include"

      });
      const data= await res.json();
      console.log(data);
      setStudentData(data);
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className="wallpaper">
      <div className="image"></div>
      <div className="text d-flex">
        <img src={image} alt="pic" />
        <ul className="list d-flex">
          <li>
            <h6>Ajay Ranabhat</h6>
            <span>Gaushala,Kathmandu</span>
          </li>
          <li>
            <h6>BCT</h6>
            <span>Department</span>
          </li>
          <li>
            <h6>IV </h6>
            <span>Year</span>
          </li>
          <li>
            <button className="logout_btn" onClick={logout}>
              <i className={"fa fa-user"}></i>Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
