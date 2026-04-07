import { Fragment } from "react"
import NavBar from "./component/NavBar"
import { Routes,Route } from "react-router-dom"
import Home from "./component/Home"
import ProductDetail from "./component/Productdetail"

export default function App () {

 

    return   (
        <>
            <NavBar/>
        <Routes>
           
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
        </Routes>
        </>
    )
}