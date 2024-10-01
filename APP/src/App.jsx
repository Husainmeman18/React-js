import React, { useState } from "react";
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Obj from "./Obj";
import Sidebar from "./Sidebar";
// import ClassForm from "./Class";
// import Class from "./Class";
// import Form from "./Form";
// import State from "./State";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <header className={`head ${isToggled ? 'headnew' : ''}`}>
        <div className="logo">
          <ul>
            <li><FontAwesomeIcon icon={faBars} onClick={handleToggle} className="Sliderbar" /></li>
            <li><h2 className="LogoText">FormAi</h2></li>
          </ul>
        </div>
        <ul className="headcontent">
          <li>Home</li>
          <li>Blog</li>
          <li>Learn more</li>
          <li>Our packages</li>
          <li>Contact us</li>
        </ul>
      </header>
      <Obj isToggled={isToggled}/>
      <Sidebar isToggled={isToggled}/>
      {/* < UseEffect /> */}
      {/* < State/> */}
      {/* <Form  /> */}
      {/* <ClassForm  /> */}
    </>
  )
}

export default App
