import React from 'react'
import "./First.css";
import { NavLink } from 'react-router-dom';

export default function First() {
  return (
    <div>
      <div className='cont'>
        <h1><u>UComplaint</u></h1>
        <div className='info'>
          <div className='stud'>
            <img src="../images/final_stud.png"></img>
            <h2>LOGIN AS</h2>
            <button className='button'> <h3>Student</h3></button>

          </div>
          <div className="admin">
          <img src="../images/final_admin.webp"></img>
          <h2>LOGIN AS</h2>
          <NavLink to="/AdminLogin"><button className='button'><h3>Admin</h3></button></NavLink>
          </div>

        </div>

      </div>
   
      
    </div>
  )
}
