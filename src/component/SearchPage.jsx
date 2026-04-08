import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { MdSearch } from "react-icons/md";

export default function SearchPage () {

    const {term,setTerm}=useContext(DataContext)
    const handleSubmit =(e) => {
        e.preventDefault()
    }
    return <div>
        <form className="search-wrapper" onSubmit={handleSubmit}>
            <MdSearch size={20} className="icon"/>
            <input placeholder="Search Something" className="input-term" value={term} onChange={(e) => setTerm(e.target.value)} />
        </form>
    </div>
}