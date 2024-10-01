import React from 'react'
// import { Link } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
export default function About() {
  let location = useLocation();
  console.log(location.state.Text);
  
  return (
    <div className='main'>
        <h1>About Page</h1>
        <Link to="/">Go To Default Page</Link>
    </div>
  )
}
