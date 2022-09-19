import React, { useState } from "react";
import './forms.css'
import { FaEdit } from 'react-icons/fa'; 
import { FaRegTrashAlt } from 'react-icons/fa';
function Form() {
  const [data, setData] = useState([
    {
      id : 1,
      name: "Ali",
      email: "alimehmood131@gmail.com",
      rollnumber: "547235216",
    },
    {
        id : 2,
      name: "ahmed",
      email: "ahmed1312@gmail.com",
      rollnumber: "125371231",
    },
    {
        id : 3,
      name: "aslam",
      email: "aslam12@gmail.com",
      rollnumber: "54112315",
    },
    {
        id : 4,
      name: "Asim",
      email: "asim@gmail.com",
      rollnumber: "541123569",
    },
    {
        id : 5,
      name: "Arslan",
      email: "arslan@gmail.com",
      rollnumber: "54112355",
    }
  ]);
    //   const [list,setList] = useState([]);
    //  const onsubmitChange = (e)=>{
    //       e.preventDefault();
    //       console.log(data.name, data.email,data.password);
    //       const values = [data.name, data.email,data.password];

    //       if(data.name && data.email && data.password){
    //           setList((li)=>[...li, values]);
    //       }
    //  }
  return (
    <>
      <div className="container">
        <h1>Form Validation</h1>
        <div className="form-div">
          <div className="Title">
            <h2>Login Form</h2>
          </div>
          <form>
                
                    <div className='items'>
                        <label>Enter Your Name</label>
                        <input type='text' value={data.name}  onChange={(e)=>{
                            setData({...data, name:e.target.value})
                        }} required autoComplete='off'/>
                    </div>
                    <div className='items'>
                        <label>Email Address</label>
                        <input type='email' value={data.email} onChange={(e)=>{
                            setData({...data,email:e.target.value})
                        }} />
                    </div>
                    <div className='items'>
                        <label>Password</label>
                        <input type='text' value={data.password} onChange={(e)=>{
                            setData({...data , password:e.target.value})
                        }}/>
                    </div>
                   
                    <input type='submit' className='button'/>
                </form>
        </div>
      </div>
      <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Email</th>
                  <th>Roll No</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              {data.map((item, index) => {
        return (
          
                <tr>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.rollnumber}</td>
                  <td className="icon"><FaEdit/></td>
                  <td className="icon"><FaRegTrashAlt/></td>
                </tr>
               
         
        );
      })}

              </tbody>
            </table>
      
     
    </>
  );
}
export default Form;
