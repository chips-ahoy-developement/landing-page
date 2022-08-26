import React from "react";

const Form = () => {
  return (
    <form className="p-5">
    <h3 className="text-light text-start">Get 30% discount </h3>
    <p className="text-light text-start mb-5">for first time customers who provide contact info blurb, sign up for our mailing list to get offer lorem ipsum</p>
    <div className="mb-5">
        <label for="name" className="form-label  text-light text-start" style={{width:"100%"}}>
         <p className="mb-0"> Name</p>
        </label>
        <input
          type="name"
          className="form-control"
          id="name"
          aria-describedby="name"
        />
        
      </div>
      <div className="mb-5">
        <label for="exampleInputEmail1" className="form-label  text-light text-start" style={{width:"100%"}}>
          <p className="mb-0">Email</p>
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
       
      </div>
      <div className="mb-5">
        <label for="exampleInputPassword1" className="form-label  text-light text-start" style={{width:"100%"}}>
          <p className="mb-0">Phone Number (optional)</p>
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
