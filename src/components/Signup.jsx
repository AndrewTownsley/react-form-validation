

const Signup = () => {

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <form className="sign-up-form" action="submit">
          <div className="sign-up-basic form-control">
            <h4>Personal Information</h4>
            <input type="text" name="fullName" placeholder="Full Name"/>
            <input type="email" name="email"  placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="password" name="confirmPassword" placeholder="Re-enter Password"/>
          </div>
              <h4>Date of Birth</h4>
          <div className="sign-up-bday-gender form-control">
            <div className="sign-up-birthday">
                <input type="text" name="month" placeholder="MM"/>
                <input type="text" name="day" placeholder="DD"/>
                <input type="text" name="year" placeholder="YYYY"/>
            </div>
            <div className="sign-up-gender">
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
            </div>
            {/* -------------------------------------------------- */}
            <input type="text" placeholder="Card Number" />
            <div className="sign-up-payment-box select">
              <input type="text" placeholder="Card CVC" />
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
        <button>Reset</button>
        <button>Submit</button>
      </div>

      
      
    </div>
  )
}

export default Signup;