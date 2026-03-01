import React, { useState } from 'react'
import { Button } from 'react-bootstrap'  // type Button take second suggestion ie, react-bootstrap.


function Counter() {

  const[counter,setCounter]=useState(0)   // here we set counter, then applied to h1 tag. if not put curly bracket in h1 tag, then only counter text  will appear.

  function increment(){
    setCounter(counter+1)
  }

  function decrement(){
       if(!counter==0){
        setCounter(counter-1)
       }
  }

  function reset(){
    setCounter(0)
  }
  

  return (
    <div>
      <div className="container border" style={{ marginTop: "200px" }}>
        <div className="text-center">
          <h1 className='text-primary'>Counter-Application</h1>
          <h1 className='fw-bolder'>{counter}</h1>    
        </div>
        <div className='text-center m-3 p-4'>

          <Button variant="success" className='m-2' onClick={increment}>Increment</Button>
          <Button variant="danger" className='m-2' onClick={reset}>Reset</Button>
          <Button variant="warning" className='m-2' onClick={decrement}>Decrement</Button>


        </div>
      </div>

    </div>
  )
}

export default Counter
