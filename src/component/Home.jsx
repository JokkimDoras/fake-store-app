import { useContext } from "react"
import { DataContext } from "../context/DataContext"

export default function Home () {
    const {data} = useContext(DataContext)
    console.log(data)
   

    
    const renderedStuff = data.map((det) => {
        return <div className="header-items" key={det.id}>

<div className="items-stuff">
                
            <div>
      <img  src={det.image}/>
            </div>

            <h4>{det.title}</h4>

</div>
        </div>
    })

    return (
        <div className="for-flex">
            {renderedStuff}
        </div>
    )
}