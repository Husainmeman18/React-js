import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// let Text = "Data Found";
export default function Home() {

    let location = useLocation();

    let Item = location.state?.data || [];
    let navigate = useNavigate();
  return (
    <div className='main'>
        {Item.length > 0 && (
          <table border={1}>
            <thead>
              <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Password</th>
              </tr></thead>
            <tbody>
              {Item.map((ele, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.password}</td>
                </tr>
              ))}
                </tbody>
          </table>
        )}
        <br />
        <button onClick={() => navigate("/")}>Go Back To Form</button>
    </div>
  )
}
