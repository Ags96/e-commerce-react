import {Route, Routes} from "react-router-dom"
import "./App.css"
import {useEffect} from "react"
import Home from "./pages/Home"
import {getAllProductsThunk} from "./store/slices/products.slices"
import {useDispatch} from "react-redux"
import Header from "./components/shared/Header"
import ProductId from "./pages/ProductId"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Purchases from "./pages/Purchases"
import Footer from "./components/shared/Footer"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductId />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchases" element={<Purchases />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
