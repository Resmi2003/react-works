import React from 'react'
import useFetch from './useFetch'
import { Button, Card } from 'react-bootstrap';


function Cart() {

const data =useFetch('https://dummyjson.com/products')  // after this look console after refreshing. so response will appear with url. that means fetch proper aayit nadannu. click its arrow, so status will see as 200.
console.log(data);

  return (
    <div>
        <div className="container d-flex row justify-content-between ms-5 text-center">
            {data?.map(item => (
               <Card style={{ width: '18rem' }} className='m-2'>
                {/* thumbnail and image in url data contains same image. took thumbnail because it is more clear. */}
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {/* slice used because we need only those lines, just we are shortening sentence to make all cards description same length and then ... this 3 dot put to just indicate extra after content */}
         {item.description.slice(0,50)}...   
        </Card.Text>
        <Button variant="warning">Buy Now</Button>
      </Card.Body>
    </Card> 
            ))
            }
        </div>
      
    </div>
  )
}

export default Cart
