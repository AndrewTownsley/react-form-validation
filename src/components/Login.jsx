import React from 'react'


const Login = () => {

  return (
    <div>
      <h1>Login Page</h1>
        <form action="submit">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="text" />
          <label htmlFor="">Username</label>
          <input type="text" />
        </form>
    </div>
  )
}

export default Login;