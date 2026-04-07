import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"

export default function Home () {
    const [toast,setToast]=useState(false)
    const {data,addToCart,cart} = useContext(DataContext)

    console.log(cart)
   const handleClick = (det) => {
    addToCart(det);
    setToast(true)
    setTimeout(() => setToast(false),2000)
   }



    
    const renderedStuff = data.map((det) => {
        return <div className="header-items" key={det.id}>

<div className="items-stuff">
                
            <div>
      <img  src={det.image}/>
            </div>

            <h4>{det.title}</h4>
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