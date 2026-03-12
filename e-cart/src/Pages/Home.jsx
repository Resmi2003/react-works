import React, { useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/slice/productSlice';
import { addToWishlist } from '../Redux/slice/wishListSlice';
import { addToCart } from '../Redux/slice/cartSlice';



function Home() {

  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector(state=>state.productReducer)   // loading also passed here.
  const {wishlist} = useSelector(state=>state.wishlistReducer)
  const cart = useSelector(state=>state.cartReducer)





  useEffect(()=>{
    dispatch(fetchProducts())   // actione component executeyyunnath dispatch vazhiyanu. actione direct calliyan petilla, dispatch must.
  },[])


  // console.log(allProducts);    // just for checking allProducts arrived. so in console in home.jsx array of data will appear.

  const handleWishList =(product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)

    if(existingProduct){
      alert("item already exist")
    }else{
      dispatch(addToWishlist(product))
      alert("item added")
    }

  }

  const handleCart = (product)=>{
    const existingProduct = cart.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("items added")
    }else{
      dispatch(addToCart(product))
      alert("item added")
    }
  }
  




  return (
    <>
    {/* header selector put */}
    <Header insideHome/>
    <div style={{ marginTop: "100px" }} className='container-fluid'>
      {/* spinner. for that created a div and put spinner also import it. spinner shows only in pending case, so for that in productSlice, add loading case, also add that in extraReducers. also passed loading using useSelector. ithinte div thott closing row vare ulla content curly bracketill wrapithu. so if pending then loading will show, if data came data will see, also loading can be seen when refreshing. */}
      { loading? <div className='text-center mt-5'>
        <Spinner animation="border" variant="success" />
      </div>
      :
        <Row>
          {/* column aanu duplicate cheyyandath. so wrap it in curly brackets. */}
        { allProducts.length>0?allProducts.map(product=>(<Col className='m-3'>
        {/* key passed for getting all products */}
        <Card style={{ width: '18rem' }} key={product.id}>   
          {/* Card.Img is wrapped in link tag , because we want to go to view page if pressed image. pressing image only goes to view page. also inside link that is Link to={} inside that curly bracket backtick is used because we need to put product id there */}
          {/* put product.id in link and src */}
      <Link to={`/view/${product.id}`}><Card.Img variant="top" src={product.thumbnail} /></Link>
      <Card.Body>
        {/* product title and description put */}
        <Card.Title className='text-warning'>{product.title}</Card.Title>
        <Card.Text>{product.description.slice(0,20)}...
        </Card.Text>
        <div className='d-flex justify-content-between'>
          {/* these are the buttons of wishlist and cart in home page. if pressed wishlist icon, then that product will be added to wishlist. cart also like that */}
        <Button className='btn btn-light' onClick={()=>handleWishList(product)}><i className="fa-solid fa-heart text-danger"></i></Button>
        <Button className='btn btn-light' onClick={()=>handleCart(product)}><i className="fa-solid fa-cart-shopping text-info"></i></Button>
        </div>
      </Card.Body>
    </Card>
    {/* instead of null we can put error statement like loading error or not found like that. */}
        </Col>)):null} 
        {/* after col wrapping things done then all products will appear in browser, also if we click single item then its id with view is appearing in url and single product can view. after this spinner is created for loading symbol when refreshing */}
      </Row>}
    </div>
    </>
  )
}

export default Home
