import React from "react";

const Form = () => {
  return (
    <form className="p-5">
    <div className="mb-3">
        <label for="name" className="form-label  text-light">
         <p> Name</p>
        </label>
        <input
          type="name"
          className="form-control"
          id="name"
          aria-describedby="name"
        />
        
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label text-start text-light">
          <p>Email</p>
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
       
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label text-start text-light">
          <p>Phone Number</p>
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
     
      <button type="submit" className="btn btn-outline-light">
        Submit
      </button>
    </form>
  );
};

export default Form;
