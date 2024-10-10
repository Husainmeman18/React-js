import React, { useEffect, useState } from "react";

function Table() {
  const [Obj, SetObj] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        SetObj(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <td>Sr no</td>
            <td>Title</td>
            <td>Images</td>
          </tr>
        </thead>
        <tbody>
          {Obj.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.title}</td>
              <td>
                <img src={ele.url} width="300px"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
