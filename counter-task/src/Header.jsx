import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar className="bg-danger">
        <Container>
          <Navbar.Brand href="#home" className='text-light fw-bolder'>
            <img
              alt=""
              src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyNjZudHppYzdraXEwZ3gyYnMwMXR3aGgyYzNiN3BkYXQ3bzd4bWV0eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZdT2zDh3Bvnkk/source.gif"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Auto Counter App
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
