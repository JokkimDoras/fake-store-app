import { createContext,useState,useEffect } from "react";

export const DataContext = createContext();

export default function DataProvider({children}){
    const [data,setData]=useState([]);
    const [ cart,setCart ] = useState([]);
    const[term,setTerm] = useState('');
    const [error,setError]=useState(null)

    const fetchData = async () => {
      try{
        setError(null)
        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const details = await res.json()
        setData(details)
    }catch(err){
        setError(err.message)
    }
    }
    const addToCart = (item) => {
        const exists = cart.find(i => i.id === item.id)
        if(exists) return
     
        setCart([...cart,item])
    }
    const removeFromCart = (idToDel) => {
       const updated =  cart.filter((item) => {
            return item.id !== idToDel
         })
         setCart(updated)
    }
    useEffect(() => {fetchData()},[])

    return <DataContext.Provider value={{data,cart,addToCart,removeFromCart,term,setTerm,error}}>
        {children}
    </DataContext.Provider>
}
