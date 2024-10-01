import React, { useEffect, useState } from 'react'

export default function Obj({isToggled}) {
  const [obj, Setobj] = useState({
    name: "",
    password: "",
  })
  const [Arr, SetArr] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [edit,Setedit] = useState(null);

  const Handleform = (e) => {
    SetArr([...Arr, obj]);
    e.target.reset();
  }
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(Arr));
  }, [Arr]);

  const deleteBtn = (index) => {
    const updatebtn = Arr.filter((_, i) => i !== index);
    SetArr(updatebtn);
    localStorage.setItem("data", JSON.stringify(updatebtn));
  }
  const Editbtn = (index) =>{
    Setedit(index);
    Setobj(Arr[index]);
  }
  const handleUpdate = () =>{
    const UpdateData = [...Arr];
    UpdateData[edit] = obj;
    SetArr(UpdateData);
  }

  return (
    <>
    <div className={`maincontent ${isToggled ? 'contentnew' :""}`}>
      <div className='main'>
        <div className="loginmain">
        <form>
          <label className='Jaat'>Name : </label>
          <input type="text" placeholder='Enter Name' value={obj.name} onChange={(e) => Setobj({ ...obj, name: e.target.value })} />
          <br /><br />
          <label className='Jaat'>Password : </label>
          <input type="password" placeholder='Enter Password' value={obj.password} onChange={(e) => Setobj({ ...obj, password: e.target.value })} />
          <br /><br />
          {edit === null ? (<button onClick={Handleform}>Submit</button>) :(<button onClick={handleUpdate}>Update</button>) }
        </form>
        <br /><br />
        {Arr.length > 0 && (
          <table border={1} >
            <thead>
              <tr>
                  <th>SR NO</th>
                <th>NAME</th>
                <th>PASSWORD</th>
                <th>ACTION</th>
              </tr></thead>
            <tbody>
              {Arr.map((ele, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.password}</td>
                  <td>
                    <button className='btns' onClick={() => deleteBtn(index)}>Delete</button>
                    <button className='btns' onClick={()=>Editbtn(index)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div></div></div>
    </>
  )
}
