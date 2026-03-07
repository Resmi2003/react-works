import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { searchProduct } from '../Redux/slice/productSlice';
import { useDispatch } from 'react-redux';

function Header({insideHome}) {
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar expand="lg" className="bg-success fixed-top">
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{textDecoration:"none",fontSize:"30px",color:"yellow"}}> <i class="fa-solid fa-truck fa-bounce"></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        { insideHome&&<Form.Control
              type="search"
              placeholder="Search"
              className="ms-5 w-25"
              onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}
            />}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
          >
            <Nav.Link className='btn btn-outline-light'><Link to={'/wishlist'} style={{color: "black", fontWeight: "bold", textDecoration: "none"}}><i className="fa-regular fa-heart text-danger"></i> Wishlist <Badge bg="primary rounded ms-2">0</Badge></Link></Nav.Link>

            <Nav.Link className='btn btn-outline-light ms-2'><Link to={'/cart'} style={{color: "black", fontWeight: "bold", textDecoration: "none"}}><i className="fa-solid fa-cart-shopping text-warning"></i> Cart <Badge bg="primary rounded ms-2">0</Badge></Link></Nav.Link>
              
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Header
