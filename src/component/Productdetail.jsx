import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import SkeletonDetail from "./SkeletonDetail";


export default function ProductDetail() {
    const [loading, setLoading] = useState(true) 
    const { data, addToCart, cart } = useContext(DataContext);
    const { id } = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500) 
    
        return () => clearTimeout(timer)
    }, [])

    const product = data.find(item => item.id === Number(id))

    if (loading) return <SkeletonDetail/>

    return (
        <div className="detail-container">         
            <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

            <div className="detail-card">           
                <div className="detail-image">
                    <img src={product.image} />
                </div>
                <div className="detail-info">
                    <h2>{product.title}</h2>
                    <p className="detail-category">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
                    <p className="detail-description">{product.description}</p>
                    <h3 className="price">${product.price}</h3>

                    <button
                        className={cart.find(i => i.id === product.id) ? "add-btn added" : "add-btn"}
                        disabled={cart.find(i => i.id === product.id)}
                        onClick={() => addToCart(product)}   
                    >
                        {cart.find(i => i.id === product.id) ? "✅ Added" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    )
}