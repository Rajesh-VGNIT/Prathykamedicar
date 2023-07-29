import React from 'react'
import { TbReportAnalytics } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
 

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="./Images/download.png" alt='logo' />
        </div>
       <div className='btn1'>
          <Link to="contact"> <button><span className='calender'><TbReportAnalytics/></span> Appointment</button></Link>
            </div>
      </div>
    </nav>
  )
}

export default Navbar;