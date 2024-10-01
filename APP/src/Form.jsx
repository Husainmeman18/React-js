import React, { useState } from "react";
import "./App.css"
export default function Form() {
    const [name, SetName] = useState("");
    const [password, SetPassword] = useState("");
    const [show, SetShow] = useState(null);
    const [check, SetCheck] = useState(false);
    const [gender, Setgender] = useState("");
    const [img, Setimg] = useState(null);
    const HandleForm = (event) => {
        event.preventDefault();
        if (check) {
            SetShow(name, password, gender, img);
            console.log(`Name : ${name}`);
            console.log(`Password : ${password}`);
            console.log(`Gender : ${gender}`);
            console.log(`img : ${img}`);
        } else {
            alert("Please Check Terms & Conditions Box")
        }
        event.target.reset();
    }
    const handleimg = (e) => {
        const StoredData = e.target.files[0];
        Setimg(StoredData);
    }
    return (
        <>
            <div className="main">
                <form action="" onSubmit={HandleForm}>
                    <input type="text" className="input" placeholder="Enter Name" onChange={(event) =>
                        SetName(event.target.value)} />
                    <br /><br />
                    <input type="password" className="input" placeholder="Enter Password" onChange={(event) =>
                        SetPassword(event.target.value)} />
                    <br /><br />
                    <input type="file" accept="" onChange={handleimg} />
                    <br /><br />
                    <input type="radio" name="gender" value="male" id="Male" onChange={(event) =>{Setgender(event.target.value)}}/>
                    <label htmlFor="Male" id="male">Male</label>
                    <input type="radio" name="gender" value="female" id="female" onChange={(event) =>{Setgender(event.target.value)}}/>
                    <label htmlFor="female" id="female">Female</label>
                    <br /><br />
                    <input type="checkbox"
                        id="check"
                        checked={check}
                        onChange={(event) => SetCheck(event.target.checked)} />
                    <label htmlFor="check"> Terms & Conditions</label>
                    <br /><br />
                    <button type="Submit">Submit</button>
                </form>
                <br />
                {show !== null ? (
                    <div>
                        <h2>Name :{name}</h2>
                        <h2>Password :{password}</h2>
                        <h2>Gender : {gender}</h2>
                        <img src={URL.createObjectURL(img)} alt="" width="50%" />
                    </div>
                ) : (
                    <span>No Data Found</span>
                )}
            </div>
        </>
    )
}
