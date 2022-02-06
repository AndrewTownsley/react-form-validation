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

  const handleNameChange = (event) => {
    setValues({...values, name: event.target.value})
  }
  const handleEmailChange = (event) => {
    setValues({...values, email: event.target.value})
  }
  const handlePasswordChange = (event) => {
    setValues({...values, password: event.target.value})
  }
  // const handleConfirmPasswordChange = (event) => {
  //   setValues({...values, confirmPassword: event.target.value})
  // }
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
   
  const confirmPassword = (event) => {
    if(values.password === values.confirmPassword) {
      setMatchPassword(true);
    } else {
      alert("passwords do not match")
    }
  }

  const formFieldReset = () => {
    console.log("form reset");
 
    setValid(false);
    setSubmitted(false);
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check that all fields are filled out 
    if(values.name && values.email && values.password && values.month && values.day && values.year && values.card && values.cvc && matchPassword)
    setValid(true);
    setSubmitted(true);
    setMatchPassword(true);
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
              {submitted && !values.name ? <span>Please enter your full name</span> : "sign-up-input"}
            <input
              className={submitted && !values.email ? "sign-up-input error" : "sign-up-input"}
              onChange={handleEmailChange} 
              values={values.email}
              type="email" 
              name="email"  
              placeholder="Email"/>
              {submitted && !values.email ? <span>Please enter your Email</span> : null}
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
              values={values.confirmPassword}
              type="password" 
              name="confirmPassword" 
              placeholder="Re-enter Password"/>
          </div>
              <h4>Date of Birth</h4>
          <div className="sign-up-bday-gender form-control">
            <div className="sign-up-birthday">
                <input
                  onChange={handleMonthChange} 
                  values={values.month}
                  type="text" 
                  name="month" 
                  maxLength="2"
                  placeholder="MM"/>
                  {submitted && !values.name ? 
                  <span>Please enter your birth month</span> : null}
                <input
                  onChange={handleDayChange} 
                  values={values.day}
                  type="text" 
                  name="day" 
                  maxLength="2"
                  placeholder="DD"/>
                  {submitted && !values.name ? 
                  <span>Please enter your birth day</span> : null}
                <input
                  onChange={handleYearChange} 
                  values={values.year}
                  type="text" 
                  name="year" 
                  maxLength="4"
                  placeholder="YYYY"/>
                  {submitted && !values.name ? 
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
              placeholder="Card Number" />
              {submitted && !values.name ? 
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
                {submitted && !values.name ? 
                <span>Please enter a valid CVC number</span> : null}
              <select name="month" id="card-month">
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
              <select name="year" id="card-year">
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