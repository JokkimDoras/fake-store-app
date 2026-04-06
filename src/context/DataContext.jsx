import { createContext,useState,useEffect } from "react";

export const DataContext = createContext();

export default function DataProvider({children}){
    const [data,setData]=useState([]);

    const fetchData = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const details = await res.json()
        setData(details)
    }
    useEffect(() => {fetchData()},[])

    return <DataContext.Provider value={{data}}>
        {children}
    </DataContext.Provider>
}
