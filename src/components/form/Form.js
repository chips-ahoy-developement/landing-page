import React from "react";

const Form = () => {
  return (
    <form>
    <div className="mb-3">
        <label for="name" className="form-label text-start">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          id="name"
          aria-describedby="name"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label text-start">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label text-start">
          Phone Number
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          I agree to terms
        </label>
      </div>
      <button type="submit" className="btn btn-outline-light">
        Submit
      </button>
    </form>
  );
};

export default Form;
