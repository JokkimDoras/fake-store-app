import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
    const navigate = useNavigate()
    return (
        <div className="nav-header">
            NavBar
            <div>
                <FaCartShopping onClick={() => navigate('/cart')}/>
                </div>
        </div>
    )
}