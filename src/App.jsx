import { Fragment,useContext } from "react"
import { DataContext } from "./context/DataContext"

export default function App () {

    const {data} = useContext(DataContext)
   

    
    const renderedStuff = data.map((det) => {
        return <div key={det.id}>
            <div>
      <img  src={det.image}/>
            </div>

            <h4>{det.title}</h4>

        </div>
    })

    return <Fragment>
       {renderedStuff}
    </Fragment>
}