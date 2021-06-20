

const Signup = () => {

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <form action="submit">
          <div className="sign-up-basic">
            <h4>Personal Information</h4>
            <input type="text" name="fullName" placeholder="Full Name"/>
            <input type="email" name="email"  placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="password" name="confirmPassword" placeholder="Re-enter Password"/>
          </div>
          <div className="sign-up-birthday">
            <h4>Date of Birth</h4>
              <input type="text" name="month" placeholder="MM"/>
              <input type="text" name="day" placeholder="DD"/>
              <input type="text" name="year" placeholder="YYYY"/>
          </div>
          <div className="sign-up-birthday">
            <label htmlFor="gender-male">Male</label>
            <input type="radio" name="gender" value="male" id="gender-male"/>
            <label htmlFor="gender-female">Female</label>
            <input type="radio" name="gender" value="female" id="gender-female"/>
          </div>
          <div className="sign-up-payment">
            <label htmlFor="payment-method-card"><span>Credit Card</span></label>
            <input type="radio" name="payment-method" value="card" id="payment-method-card" checked="true" />
            <label htmlFor="payment-method-card"><span>Paypal</span></label>
            <input type="radio" name="payment-method" value="paypal" id="payment-method-paypal" />
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Card CVC" />
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </form>
      </div>

      
      
    </div>
  )
}

export default Signup;