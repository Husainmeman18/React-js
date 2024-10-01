import React, { useEffect, useState } from 'react'
import Demo from './Demo';

export default function UseEffect() {
  const [count,Setcount] = useState(0);
  const [show,Setshow] = useState(true);
  useEffect(()=>{
    console.log("Mounting");
  },[]);
  useEffect(() =>{
    console.log("Updating");
  },[count]);
  useEffect(() =>{
    console.log("Unmount");
  },[show])
  return (
    <div className='main'>
        <h2>Count : {count}</h2>
        <br />
        <button onClick={() => Setcount(count + 1)}>INC</button>
        <br /><br />
        {show ? <h2><Demo/></h2> : <h2>Removed</h2>}
        <br />
        <button onClick={()=> Setshow((false))}>Remove Compo</button>
    </div>
  )
}
