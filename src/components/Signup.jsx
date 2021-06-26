import React, { useState } from "react";

const Signup = () => {
  const [values, setValues] = useState({
    fullName: "",
  })

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameChange = (event) => {
    setValues({...values, name: event.target.value})
  }
  const handleEmailChange = (event) => {
    setValues({...values, email: event.target.value})
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check that all fields are filled out 
    
  }

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <form className="sign-up-form" action="submit" onSubmit={handleFormSubmit}>
          <div className="sign-up-basic form-control">
            <h4>Personal Information</h4>
            <input onChange={handleNameChange} values={values.name}type="text" name="name" placeholder="Full Name"/>
            <input onChange={handleEmailChange} values={values.email}type="email" name="email"  placeholder="Email"/>
            <input onChange={handlePasswordChange} values={values.password}type="password" name="password" placeholder="Password"/>
            <input onChange={handleConfirmPasswordChange} values={values.password}type="password" name="confirmPassword" placeholder="Re-enter Password"/>
          </div>
              <h4>Date of Birth</h4>
          <div className="sign-up-bday-gender form-control">
            <div className="sign-up-birthday">
                <input onChange={handleMonthChange} values={values.month}type="text" name="month" placeholder="MM"/>
                <input onChange={handleDayChange} values={values.day}type="text" name="day" placeholder="DD"/>
                <input onChange={handleYearChange} values={values.year}type="text" name="year" placeholder="YYYY"/>
            </div>
            {/* <div className="sign-up-gender">
              <input type="radio" name="gender" value="male" id="gender-male"/>
              <label htmlFor="gender-male">Male</label>
              <input type="radio" name="gender" value="female" id="gender-female" checked/>
              <label htmlFor="gender-female">Female</label>
            </div>
          </div>
          <div className="sign-up-payment form-control">
            <div className="sign-up-payment-box">
              <input type="radio" name="payment-method" value="card" id="payment-method-card" checked/>
              <label htmlFor="payment-method-card">Credit Card</label>
              <input type="radio" name="payment-method" value="paypal" id="payment-method-paypal" />
              <label htmlFor="payment-method-paypal">Paypal</label>
            </div> */}
            {/* -------------------------------------------------- */}
            <input onChange={handleCardChange} name="card" values={values.card}type="text" placeholder="Card Number" />
            <div className="sign-up-payment-box select">
              <input onChange={handleCvcChange} name="cvc" values={values.cvc}type="text" placeholder="Card CVC" />
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
        </form>
        <button className="sign-up-btn">Reset</button>
        <button className="sign-up-btn">Submit</button>
      </div>

      
      
    </div>
  )
}

export default Signup;