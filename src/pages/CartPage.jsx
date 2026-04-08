import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import SkeletonCart from "../skeleton/SkeletonCart";


export default function CartPage () {
    const [loading, setLoading] = useState(true) 

    const { cart,removeFromCart } = useContext(DataContext);

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500) 
    
        return () => clearTimeout(timer)
    }, [])

    if(loading){
        return <SkeletonCart/>
    }



if(cart.length === 0) return (
    <div className="empty-cart">
        <h2>Your Cart is Empty! 🛒</h2>
        <button onClick={() => navigate('/')}>Go Shopping</button>
    </div>
)
const renderedCart = cart.map((item) => (
    <div onClick={() => navigate(`/product/${item.id}`)} className="cart-items" key={item.id}>
        <img src={item.image}/>
        <div className="cart-item-details">
            <h4>{item.title}</h4>
            <p className="price">${item.price}</p>
        </div>
        <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
    </div>
))
const total = cart.reduce((acc, item) => acc + item.price, 0)
return (
    <div className="cart-container">
        <button className="back-btn" onClick={() => navigate(-1)}>←Back</button>
        <h2>Your Cart ({cart.length})</h2>
        {renderedCart}
        <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="add-btn">Checkout</button>
        </div>
    </div>
)

}