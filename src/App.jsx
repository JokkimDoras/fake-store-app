import { Fragment } from "react"
import NavBar from "./component/NavBar"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetail from "./pages/Productdetail"
import CartPage from "./pages/CartPage"
export default function App () {

 

    return   (
        <>
            <NavBar/>
        <Routes>
           
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
            <Route path='/cart' element={<CartPage/>}/>
        </Routes>
        </>
    )
}