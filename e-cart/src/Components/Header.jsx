import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { searchProduct } from '../Redux/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header({insideHome}) {     // insideHome is passed as props in curly brackets
  const dispatch = useDispatch()    // for dispatching searchProduct action, then put onchange in form control.
  const {wishlist}=useSelector(state=>state.wishlistReducer)
  const cart = useSelector(state=>state.cartReducer)

  const[wishListCount,setWishListCount] = useState(0)
  const[cartCount,setCartCount] = useState(0)

 useEffect(()=>{
  setWishListCount(wishlist.length)
  setCartCount(cart.length)
 },[wishlist,cart])




  return (
    <div>
      {/* fixed-top used because to fix the navbar in top. if scrolled it will not move, it is fixed there. */}
      <Navbar expand="lg" className="bg-success fixed-top">
      <Container>
        {/* Link to={'/'} used because if we click on e-cart heading and that icon then it will redirect to home page. */}
        <Navbar.Brand ><Link to={'/'} style={{textDecoration:"none",fontSize:"30px",color:"yellow"}}> <i class="fa-solid fa-truck fa-bounce"></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
         {/* wrapped form control tag in curly bracket and then put insideHome&& , that means in home only that search bar will appear. insideHome is just a name we put, not default. so insideHome true aayal mathre search kanikkullu */}
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
            <Nav.Link className='btn btn-outline-light'><Link to={'/wishlist'} style={{color: "black", fontWeight: "bold", textDecoration: "none"}}><i className="fa-regular fa-heart text-danger"></i> Wishlist <Badge bg="primary rounded ms-2">{wishListCount}</Badge></Link></Nav.Link>

            <Nav.Link className='btn btn-outline-light ms-2'><Link to={'/cart'} style={{color: "black", fontWeight: "bold", textDecoration: "none"}}><i className="fa-solid fa-cart-shopping text-warning"></i> Cart <Badge bg="primary rounded ms-2">{cartCount}</Badge></Link></Nav.Link>
              
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Header
