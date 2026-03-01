import React from 'react'    // enter rfce, so defaultly // these put things will came automatic..
import { Container, Navbar } from 'react-bootstrap'

function Header() {   // 
  return (   // 
    <div>    
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home" className='text-light fw-bolder'>
            <img
              alt=""
              src="https://i.pinimg.com/originals/14/bd/f7/14bdf7aa1794bc0a9965bbff73deefe2.gif"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Counter-Application
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>    // 
  )    //
}      //

export default Header     // 
