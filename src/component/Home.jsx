import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"
import { useNavigate } from "react-router-dom"

export default function Home () {
    const [toast,setToast]=useState(false)
    const {data,addToCart,cart} = useContext(DataContext)


    console.log(cart)
   const handleClick = (det) => {
    addToCart(det);
    setToast(true)
    setTimeout(() => setToast(false),2000)
   }

const navigate = useNavigate();

    
    const renderedStuff = data.map((det) => {
        return <div className="header-items" key={det.id}>

<div className="items-stuff">
                
            <div onClick={() => navigate(`/product/${det.id}`)}>
      <img  src={det.image}/>
            </div>

            <h4 onClick={() => navigate(`/product/${det.id}`)}>{det.title}</h4>
            <p className="price"> ${det.price}</p>
            <button onClick={() => handleClick(det)} className="add-btn">Add to Cart</button>

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