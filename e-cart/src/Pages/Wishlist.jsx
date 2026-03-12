import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlist } from '../Redux/slice/wishListSlice';
import { addToCart } from '../Redux/slice/cartSlice';

function Wishlist() {
    const dispatch = useDispatch()
    const {wishlist}=useSelector(state=>state.wishlistReducer)

    const handleCart=(product)=>{
      dispatch(addToCart(product))
      dispatch(removeWishlist(product.id))
    }



  return (
    <>
    {/* header selector put */}
    <Header/>
    {/* same styling of home page. only change is icon and title only needed, content not needed. so copy paste same styling (full div in home) code from home page and change only that. here delete icon needed instead of wishlist icon. change that only. remaining same as home page. */}
    <div style={{ marginTop: "100px" }} className='container-fluid'>
      <Row>

        {wishlist.length>0?wishlist.map((product=>(<Col className='m-3'>
        <Card style={{ width: '18rem' }}>
          {/* also link tag which wrapped card image is removed, because here we don't need to go to another page if clicked image. */}
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title className='text-warning'>{product.title.slice(0,20)}...</Card.Title>
        <Card.Text>{product.description.slice(0,20)}...
        </Card.Text>
        <div className='d-flex justify-content-between'>
          {/* this first button's icon only changed to trash. second button same. */}
        <Button className='btn btn-light' onClick={()=>dispatch(removeWishlist(product.id))}><i className="fa-solid fa-trash text-danger"></i></Button>
        <Button className='btn btn-light' onClick={()=>handleCart(product)}><i className="fa-solid fa-cart-shopping text-info"></i></Button>
        </div>
      </Card.Body>
    </Card>
        </Col>))):<div className='text-center'>
          <img src="https://krosfitsports.com/public/empty-cart.gif" alt="" />
          <h1 className='text-danger mt-5'>Your Wishlist Is Empty....</h1>
          </div>}
      </Row>
    </div>
    </>
  )
}

export default Wishlist
