import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import View from './Pages/View'


// from this header selector and its import statement removed. because we only need the search bar (form control tag inside header page) in home page. for that in header page wrapped form control tag in curly bracket and then put insideHome&& , that means in home only that search bar will appear. also in header page insideHome is passed as props in curly brackets in function Header. then in home page, inside return put Header selector with insideHome like <Header insideHome/>. then in cart,view,wishlist in these pages put header selector inside return like <Header/>, so in those 3 pages the header will only visible without searchbar, and in home page header with search bar will appear. import header in home, cart, wishlist, and in view page.


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/view/:id' element={<View />} />
      {/* requesting an invalid url redirect to home instead of page not found*/}
      <Route path='/*' element={<Navigate to={'/'}/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
