import axios from "axios";
import { useState } from "react";

export default function AddProperty() {
  const [form, setForm] = useState({ title: "", location: "", price: "", description: "", image: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/properties", form);
    alert("Property added!");
  };
    return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
      <form onSubmit={handleSubmit} className="grid gap-3 max-w-md">
        <input placeholder="Title" onChange={(e)=>setForm({...form,title:e.target.value})}/>
        <input placeholder="Location" onChange={(e)=>setForm({...form,location:e.target.value})}/>
        <input placeholder="Price" onChange={(e)=>setForm({...form,price:e.target.value})}/>
        <input placeholder="Image URL" onChange={(e)=>setForm({...form,image:e.target.value})}/>
        <textarea placeholder="Description" onChange={(e)=>setForm({...form,description:e.target.value})}/>
        <button className="bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}