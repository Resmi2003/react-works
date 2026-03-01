
import { useState } from 'react'
import './App.css'
import User from './User'
import Employee from './Employee'

function App() {

  const[name,setName]=useState("Ajith")
  const[age,setAge]=useState(25)
  const[email,setEmail]=useState("ajith@gmail.com")
  const[phn,setPhn]=useState(7593007898)


  return (
    <>
    {/* user component */}
    <h1>User Component</h1>
    <User uName={name} userAge={age} userEmail={email} userPhn={phn}/>

    {/* Employee component */}
    <h1>Employee Component</h1>
    <Employee/>
    </>
  )
}

export default App
