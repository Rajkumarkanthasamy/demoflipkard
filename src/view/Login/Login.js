import React from 'react'
import "./Login.css"
import TextField from '@mui/material/TextField';

function Login() {
  return (
    <div className='center-align_'>
   <div className='SignUp-continer'>
    
        <div className='information-continer'>
            <h2>Looks like you're new here!</h2>
            <h3>Login  with your mobile number to get started</h3>
            <div className='logo-image'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEtoiuVzsEBDK51MfTA-j2zqxYG74EGR5D4G_fE6m2gnOqbq1bHH_FsYksKqQJH3VOZU&usqp=CAU' alt='logo'/>
            </div>
        </div>

        <div className='SignUp-continer-elements-right'>
        <TextField id="standard-basic" className='tex-field'  label="Enter email / Mobile Number" variant="standard" size='Normal'/>
        <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
        <button className='button'>Reaquest OTP</button>
        <button className='button-exit button'>Existing User? Sign Up</button>

        </div>

   </div>
    </div>
  )
}

export default Login