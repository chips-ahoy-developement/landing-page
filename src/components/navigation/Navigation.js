import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './navigation.module.css';
import icon from "../../assets/icon.svg"

const Navigation = () => {
  return (
  
    <nav className="navbar navbar-light bg-light">
    <div className="container">
    <a className="navbar-brand" href="/">
      <img src={icon} alt="" width="30" height="24" className="d-inline-block align-text-top" />
        CENTER POINT
    </a>
    <div className='d-flex'>
    <button type="button" className="btn btn-outline-dark rounded-pill">Get the Offer</button>
    </div>
    </div>
  </nav>
    
  )
  
}

export default Navigation