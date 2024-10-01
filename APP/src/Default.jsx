import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'
// import "./Main.css"

let name = "Ved";
export default function Default() {
  const [Obj,Setobj] = useState({
    name :"",
    password : "" 
  });

  const [Arr,SetArr] = useState(()=>{
    const storedData = localStorage.getItem("Formdata");
    return storedData ? JSON.parse(storedData) : [];
  });

  const Handleform = (e) =>{
    e.preventDefault();
    const UpatedArr = [...Arr,Obj];
    SetArr(UpatedArr);
    localStorage.setItem("Formdata",JSON.stringify(UpatedArr));
    Setobj({
      name : "",
      password : "",
    })
    navigate("/home",{state:{data:UpatedArr}});
  }

  let navigate = useNavigate();

  return (
    <div className="main">
      <form onSubmit={Handleform}>
        <input type="text" placeholder="Enter Name" value={Obj.name} onChange={(e)=>Setobj({...Obj,name:e.target.value})}/>
        <br /><br />
        <input type="text" placeholder="Enter Password" value={Obj.password} onChange={(e)=>Setobj({...Obj,password:e.target.value})}/>
        <br /><br />
        <button className="submit">Submit</button>
      </form><br />
      {/* <Link to="/home">Go To Home Page</Link> */}
    </div>
  );
}
