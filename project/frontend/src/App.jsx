import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/properties")
      .then(res => setProperties(res.data))
      .catch(err => console.log(err));
  }, []);
   return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Properties</h2>
      <div className="grid grid-cols-3 gap-4">
        {properties.map((p) => (
          <div key={p._id} className="border p-3 rounded shadow">
            <img src={p.image} alt={p.title} className="h-40 w-full object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{p.title}</h3>
            <p>{p.location}</p>
            <p className="text-green-600 font-bold">₹{p.price}/month</p>
          </div>
        ))}
      </div>
    </div>
  );
}