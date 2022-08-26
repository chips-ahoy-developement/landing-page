import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import icon from "../../assets/icon.svg"

const Navigation = () => {
  return (
  
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={icon} alt="" width="30" height="24" className="d-inline-block align-text-top" />
        Centerpoint
    </a>
    <div className='d-flex'>
    <button type="button" className="btn btn-outline-dark">Get the Offer</button>
    </div>
    </div>
  </nav>
    
  )
  
}

export default Navigation