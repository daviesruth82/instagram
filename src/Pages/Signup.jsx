import React from 'react'
import '../Styles/Signup.css'   
import Button from '../Components/Button'

const Signup = () => {
  return (
    <main className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="Password" placeholder="Confirm Password" />
          <Button text="sign Up" className="signUp-btn" onClick="onClick" />
        </form>
      </div>
    </main>
  );
}

export default Signup



