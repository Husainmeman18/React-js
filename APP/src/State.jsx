import React, { Component, useState } from 'react'
import "./App.css"
export default function State(){
    const[obj,SetObj] = useState({
      name : "",
      password : "",
      gender : "",
      show :null,
    });
    const handleform = (e) => {
      e.preventDefault();
      SetObj({...obj,show :(obj)})
      console.log(obj.name);
      console.log(obj.password);
      console.log(obj.gender);
      e.target.reset();
    } 
    const handlevalue = (e) =>{
      SetObj({...obj,[e.target.name] : e.target.value})
    }  
    return (
      <>
      <div className='main'>
        <form onSubmit={handleform}>
            <label htmlFor="name">Name: </label>
            <input id='name' type="text" name='name' onChange={handlevalue}/>
            <br /><br />
            <label htmlFor="pass">Password: </label> 
            <input id='pass' type="password" name='password' onChange={handlevalue}/>
            <br /> <br />
            <input type="radio" name='gender' id='male' value="male" onChange={handlevalue}/>
            <label htmlFor="male" id='male'>Male</label>
            <input type="radio" name='gender' id='female' value="Female" onChange={handlevalue}/>
            <label htmlFor="female" id='female'>Female</label>
            <br /><br />
            <button>Submit</button>
        </form>
        {obj.show !== null ? (
            <>
            <h2>Name : {obj.name}</h2>
            <h2>Password : {obj.password}</h2>
            <h2>Gender :{obj.gender}</h2>
            </>
        ):("") }
        </div>
      </>
    )
}
