import React from "react";

const Form = () => {
  return (
    <div className="col-sm-12 col-md-6 mt-5 mb-5 shadow-lg bg-dark rounded-4">
    <form className="p-5  ">
    <p className="text-light text-start mb-5">Join our mailing list and receive a 30% discount as a new subscriber. Stay updated on our latest projects and be the first to take advantage of exclusive offers.</p>
   
    <div className="mb-4 input-group">
        <label htmlFor="name" className="form-label  text-light text-start" style={{width:"100%"}}>
         <p className="mb-0"> Name</p>
        </label>
        <input
          type="name"
          className="form-control rounded-pill"
          id="name"
          aria-describedby="name"
        />
        
      </div>
      <div className="mb-4 input-group">
        <label htmlFor="exampleInputEmail1" className="form-label  text-light text-start" style={{width:"100%"}}>
          <p className="mb-0">Email</p>
        </label>
        <input
          type="email"
          className="form-control rounded-pill"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
       
      </div>
      <div className="mb-4 input-group">
        <label htmlFor="exampleInputPassword1" className="form-label  text-light text-start" style={{width:"100%"}}>
          <p className="mb-0">Phone Number (optional)</p>
        </label>
        <input
          type="password"
          className="form-control rounded-pill"
          id="exampleInputPassword1"
        />
      </div>
     
      <button type="submit" className="btn btn-outline-light">
        Submit
      </button>
    </form>
    </div>
  );
};

export default Form;
