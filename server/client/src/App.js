import React from 'react'

import Store from './components/Store.js'
import Product from './SingleProduct.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { category } from './components/Products'
import Homepage from './components/Homepage.js'
// import { SignIn } from './firebase/utils/signIn'
import Homepage from './components/Homepage.js'
import Login  from './components/Login.js'
import Signup from './components/Signup.js'

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
        <Route path='/product/:listing_id' element={<Product />} />
        <Route>404 error page</Route>
      </Routes>
    </Router>
  )
}

export default App
