import React ,{useState}from 'react'

import Store from './components/Store.js'
import Product from './SingleProduct.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { category } from './components/Products'
import Homepage from './components/Homepage.js'
import Login  from './components/Login.js'
import Signup from './components/Signup.js'
import LandingPage from "./components/LandingPage"
import Shopkeeper from './components/Shopkeeper'
import Grocery from "./components/Grocery"
import Clothing from "./components/Clothing"
import Accessories from "./components/Accessories"
import Electronics from "./components/Electronics"

function App () {
  const [user, setUserState] = useState({})

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/landingpage' element={<LandingPage />} />
        <Route
          exact
          path='/login'
          element={
            user && user._id ? <Homepage /> : <Login loginUser={setUserState} />
          }
        ></Route>
        <Route
          exact
          path='/login'
          element={<Login loginUser={setUserState} />}
        />
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route path='/product' exact element={<Store />} />
        <Route path='/grocery' exact element={<Grocery />} />
        <Route path='/accessories' exact element={<Accessories />} />
        <Route path='/clothing' exact element={<Clothing />} />
        <Route path='/electronics' exact element={<Electronics />} />
        {/* <Route path='/product/:id' element={<Product />} /> */}
        <Route path='/shopkeeper' element={<Shopkeeper />}/>
        <Route>404 error page</Route>
      </Routes>
    </Router>
  )
}

export default App
