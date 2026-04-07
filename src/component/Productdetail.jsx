import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
    const { data, addToCart, cart } = useContext(DataContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const product = data.find(item => item.id === Number(id))

    if (!product) return <h2>Loading...</h2>

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
                        onClick={() => addToCart(product)}   // ✅ wired up
                    >
                        {cart.find(i => i.id === product.id) ? "✅ Added" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    )
}