import { Fragment,useContext } from "react"
import { DataContext } from "./context/DataContext"
import NavBar from "./component/NavBar"
export default function App () {

    const {data} = useContext(DataContext)
   

    
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

    return   (<div>
        <NavBar/>

         <div className="for-flex">


       {renderedStuff}
        </div>
    </div>)
}