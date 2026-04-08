import { createContext,useState,useEffect } from "react";

export const DataContext = createContext();

export default function DataProvider({children}){
    const [data,setData]=useState([]);
    const [ cart,setCart ] = useState([]);
    const[term,setTerm] = useState('');

    const fetchData = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const details = await res.json()
        setData(details)
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

    return <DataContext.Provider value={{data,cart,addToCart,removeFromCart,term,setTerm}}>
        {children}
    </DataContext.Provider>
}
