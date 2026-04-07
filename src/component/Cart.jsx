import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";


export default function Cart () {
    const { data } = useContext(DataContext);

    const navigate = useNavigate();

if(Cart.length === 0) return (
    <div className="empty-cart">
        <h2>Your Cart is Empty! 🛒</h2>
    </div>
)

}