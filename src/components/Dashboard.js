import React,{useState} from 'react'
import DemoLogin from '../demologin/DemoLogin'

const Dashboard = () => {

  const [token, setToken] = useState()

   if(!token){
    return <DemoLogin setToken={setToken}/>
   }

 return (
    <div>
      <h1 className='text-white font-bold text-2xl'>DashBoard</h1>
    </div>
  )
}

export default Dashboard
