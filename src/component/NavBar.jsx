import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import SearchPage from "./SearchPage";
export default function NavBar() {
    const navigate = useNavigate()
    return (
        <div  className="nav-header">
            <div onClick={() => navigate(`/`)}>
            Home
            </div>
            <div>
                <SearchPage/>
            </div>
            <div>
                <FaCartShopping onClick={() => navigate('/cart')}/>
                </div>
        </div>
    )
}