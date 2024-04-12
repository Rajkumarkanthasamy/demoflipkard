import React from 'react'
import "./SignupHolder.css"
import TextField from '@mui/material/TextField';

function SignUpHolder() {
  return (
    <div className='center-align_'>
   <div className='SignUp-continer'>
    
        <div className='information-continer'>
            <h2>Looks like you're new here!</h2>
            <h3>Sign up with your mobile number to get started</h3>
            <div className='logo-image'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEtoiuVzsEBDK51MfTA-j2zqxYG74EGR5D4G_fE6m2gnOqbq1bHH_FsYksKqQJH3VOZU&usqp=CAU' alt='logo'/>
            </div>
        </div>

        <div className='SignUp-continer-elements-right'>
        <TextField id="standard-basic" className='tex-field'  label="Enter Mobile Number" variant="standard" size='Normal'/>
        <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
        <button className='button'>CONTINUE</button>
        <button className='button-exit button'>Existing User? Login</button>

        </div>

   </div>
    </div>
  )
}

export default SignUpHolder