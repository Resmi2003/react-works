import React, { useState } from 'react'
import { Button } from 'react-bootstrap'  // type Button take second suggestion ie, react-bootstrap.
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './Redux/slice/counterSlice'


function Counter() {

const count = useSelector((state)=>state.counterReducer.count)
const dispatch = useDispatch()
  
  

  return (
    <div>
        <h1 className='text-center fw-bolder mt-5 text-warning'>Counter-Application</h1>
      <div className="container border border-dark mt-4 p-5 rounded w-50">
          <h2 className='text-center mt-5'>{count}</h2>

        <div className='d-flex justify-content-around mt-5'>
          <Button variant="success" onClick={()=>dispatch(increment())}>Increment</Button>
          <Button variant="danger">Reset</Button>
          <Button variant="warning">Decrement</Button>
        </div>

        <div className='d-flex mt-5 p-3'>
            <input type="text" className='form-control' placeholder='enter amount' />
            <Button className='btn btn-primary m-2'>Increment By Amount</Button>
        </div>
      </div>
    </div>
  )
}

export default Counter
