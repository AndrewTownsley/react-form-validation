import React, { useState } from "react";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    month: "",
    day: "",
    year: "",
    card: "",
    cvc: "",
  })

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);
  const [emailVerification, setEmailVerification] = useState(false);

  const handleNameChange = (event) => {
    setValues({...values, name: event.target.value})
  }
  const handleEmailChange = (event) => {
    setValues({...values, email: event.target.value})
    console.log("verify email");
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(event.target.value.trim())) {    
    setEmailVerification(true);
    console.log("Email VALID!!!!!");
  } else {
    setEmailVerification(false);
    console.log("Email NOT valid");
 };
  }
  const handlePasswordChange = (event) => {
    setValues({...values, password: event.target.value})
  }
  const handleConfirmPasswordChange = (event) => {
    setValues({...values, confirmPassword: event.target.value})
  }
  const handleMonthChange = (event) => {
    setValues({...values, month: event.target.value})
  }
  const handleDayChange = (event) => {
    setValues({...values, day: event.target.value})
  }
  const handleYearChange = (event) => {
    setValues({...values, year: event.target.value})
  }
  const handleCardChange = (event) => {
    setValues({...values, card: event.target.value})
  }
  const handleCvcChange = (event) => {
    setValues({...values, cvc: event.target.value})
  }
   
  const confirmPassword = () => {
    if((values.password && values.confirmPassword) && (values.password === values.confirmPassword)) {
      setMatchPassword(true);
      console.log("Passwords match");
    } else {
      console.log("Passwords do not match");
    }
  }

//   const verifyEmailInput = (e) => {
//     console.log("verify email");
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(e.target.value.trim())) {    
//     setEmailVerification(true);
//     console.log("Email VALID!!!!!");
//   } else {
//     setEmailVerification(false);
//     console.log("Email NOT valid");
//  };
//   }

  const formFieldReset = () => {
    console.log("form reset");
 
    setValid(false);
    setSubmitted(false);
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    confirmPassword();
    // Check that all fields are filled out 
    console.log("submitted: ", submitted);
    console.log("emailVerification: ", emailVerification);
    if(values.name && values.email && values.password && values.month && values.day && values.year && values.card && values.cvc && matchPassword && emailVerification) {
      setValid(true);
      setSubmitted(true);
      setMatchPassword(true);
      console.log("submitted: ", submitted);
    }
  }
 

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <form className="sign-up-form" action="submit" onSubmit={handleFormSubmit}>
          <div className="sign-up-basic form-control">
            <h4>Personal Information</h4>
            {submitted && valid && matchPassword ? 
              <div className="success-msg">Success! Thank you for registering.
              </div> : null}
            <input
              className={submitted && !values.name ? "sign-up-input error" : "sign-up-input"}
              onChange={handleNameChange} 
              values={values.name}
              type="text" 
              name="name" 
              placeholder="Full Name"/>
              {submitted && !values.name ? <span>Please enter your full name</span> : null}
            <input
              className={submitted && !values.email ? "sign-up-input error" : "sign-up-input"}
              onChange={handleEmailChange} 
              // onBlur={verifyEmailInput}
              values={values.email}
              // type="email" 
              name="email"  
              placeholder="Email"/>
              {(submitted && !values.email) || (submitted && !emailVerification) ? <span>Please enter your Email</span> : null}
            <input
              className={submitted && !values.password ? "sign-up-input error" : "sign-up-input"} 
              onChange={handlePasswordChange} 
              values={values.password}
              type="password" 
              name="password" 
              placeholder="Password"/>
              {submitted && !values.password ? <span>Please enter your password</span> : null}
            <input
              className={submitted && !values.confirmPassword ? "sign-up-input error" : "sign-up-input"} 
              onSubmit={confirmPassword} 
              onChange={handleConfirmPasswordChange} 
              values={values.confirmPassword}
              type="password" 
              name="confirmPassword" 
              placeholder="Re-enter Password"/>
              {submitted && !values.confirmPassword ? <span>Please re-enter your password</span> : null}
          </div>
              <h4>Date of Birth</h4>
          <div className="sign-up-bday-gender form-control">
            <div className="sign-up-birthday">
                <input
                  className={submitted && !values.month ? "sign-up-input error" : "sign-up-input"} 
                  onChange={handleMonthChange} 
                  values={values.month}
                  type="text" 
                  name="month" 
                  maxLength="2"
                  placeholder="MM"/>
                  {submitted && !values.month ? 
                  <span>Please enter your birth month</span> : null}
                <input
                  className={submitted && !values.day ? "sign-up-input error" : "sign-up-input"} 
                  onChange={handleDayChange} 
                  values={values.day}
                  type="text" 
                  name="day" 
                  maxLength="2"
                  placeholder="DD"/>
                  {submitted && !values.day ? 
                  <span>Please enter your birth day</span> : null}
                <input
                  className={submitted && !values.year ? "sign-up-input error" : "sign-up-input"} 
                  onChange={handleYearChange} 
                  values={values.year}
                  type="text" 
                  name="year" 
                  maxLength="4"
                  placeholder="YYYY"/>
                  {submitted && !values.year ? 
                  <span>Please enter your birth year</span> : null}
            </div>
            {/* <div className="sign-up-gender">
              <input
                className={} type="radio" name="gender" value="male" id="gender-male"/>
              <label htmlFor="gender-male">Male</label>
              <input
                className={} type="radio" name="gender" value="female" id="gender-female" checked/>
              <label htmlFor="gender-female">Female</label>
            </div>
          </div>
          <div className="sign-up-payment form-control">
            <div className="sign-up-payment-box">
              <input
                className={} type="radio" name="payment-method" value="card" id="payment-method-card" checked/>
              <label htmlFor="payment-method-card">Credit Card</label>
              <input
                className={} type="radio" name="payment-method" value="paypal" id="payment-method-paypal" />
              <label htmlFor="payment-method-paypal">Paypal</label>
            </div> */}
            {/* -------------------------------------------------- */}
            <input
              className={submitted && !values.card ? "sign-up-input error" : "sign-up-input"}              
              onChange={handleCardChange} 
              name="card" 
              values={values.card}
              type="text" 
              maxLength="16"
              minLength="16"
              placeholder="Card Number" />
              {submitted && !values.card ? 
              <span>Please enter a valid credit card number</span> : null}
            <div className="sign-up-payment-box select">
              <input
                className={submitted && !values.cvc ? "sign-up-input error" : "sign-up-input"}
                onChange={handleCvcChange} 
                name="cvc" 
                values={values.cvc}
                type="text" 
                maxLength="3"
                placeholder="Card CVC" />
                {submitted && !values.cvc ? 
                <span>Please enter a valid CVC number</span> : null}
              <select name="month" id="card-month" className="sign-up-input">
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select name="year" id="card-year" className="sign-up-input">
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>
          </div>
        <div className="btn-container">
          <button 
            className="sign-up-btn" 
            type="submit"
            // onClick={verifyEmailInput}
          >
            Submit
          </button>
          <button 
            type="reset"
            className="sign-up-btn"
            onClick={formFieldReset}
          >
            Reset
          </button>
        </div>
        </form>
      </div>

      
      
    </div>
  )
}

export default Signup;