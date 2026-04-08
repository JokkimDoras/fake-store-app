import { useContext, useState,useEffect } from "react"
import { DataContext } from "../context/DataContext"
import { useNavigate } from "react-router-dom"
import SkeletonHome from "../skeleton/SkeletonHome"

export default function Home () {
    const [toast,setToast]=useState(false)
    const {data,addToCart,cart,term} = useContext(DataContext)
    const [loading, setLoading] = useState(true) 


   const handleClick = (det) => {
    addToCart(det);
    setToast(true)
    setTimeout(() => setToast(false),2000)
   }

   const filtered = term ? data.filter(item => item.title.toLowerCase().includes(term.toLowerCase())):data

   useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false)
    }, 500) 

    return () => clearTimeout(timer)
}, [])
const navigate = useNavigate();

if(loading){
    return <SkeletonHome/>
}
    
    const renderedStuff = filtered.map((det) => {
        const isInCart = cart.find(item => item.id === det.id)
        return <div className="header-items" key={det.id}>

<div className="items-stuff">
                
            <div onClick={() => navigate(`/product/${det.id}`)}>
      <img  src={det.image}/>
            </div>

            <h4 onClick={() => navigate(`/product/${det.id}`)}>{det.title}</h4>
            <p className="price"> ${det.price}</p>
            <button onClick={() => handleClick(det)} className="add-btn">{isInCart? "✅ Added" : "Add to Cart"}</button>

</div>
        </div>
    })

    return (
        <>

{toast && (
<div className="toast">
✅ Successfully added to cart!
</div>
)}      
  <div className="for-flex">
          
            {renderedStuff}
        </div>
            </>
    )
}