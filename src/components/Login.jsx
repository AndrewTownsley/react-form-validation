import React, { useState } from 'react';

const LogIn = () => {
  const [values,setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const [submitted, setSubmitted] = useState(false);
  const [valid,setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstName && values.lastName && values.email)
    setValid(true);
    setSubmitted(true);
  }

  return (
    <div className="login">
      <div className="form-window">
      <h3>Create an Account</h3>
      {submitted && valid ? <div className="success-msg">Success! Thank you for registering.</div> : null}
      <form onSubmit={handleSubmit} action="submit" className="form-container">
        <input 
          onChange={handleFirstNameInputChange}
          values={values.firstName}
          type="text" 
          placeholder="First Name" 
          name="firstName"
          className="form-element" 
        />
          {submitted && !values.firstName ? <span>Please enter your first name</span> : null}
        <input 
          onChange={handleLastNameInputChange}
          values={values.lastName}
          type="text" 
          placeholder="Last Name" 
          name="lastName"
          className="form-element" 
        />
          {submitted && !values.lastName ? <span>Please enter your last name</span> : null}     
        <input 
          onChange={handleEmailInputChange}
          values={values.email}
          type="email" 
          placeholder="Email"
          className="form-element"
          required 
        />
          {submitted && !values.email ? <span>Please enter a valid email address</span> : null}      
        <button className="register-btn">Register</button>
      </form>
    </div>
  </div>
  )
}

export default LogIn;