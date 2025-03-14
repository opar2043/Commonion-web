import React, { useEffect, useState } from "react";
import Card from "./Root/Card";

const Event = () => {
    const [cart , setCart] = useState([]);
    useEffect(()=>{
        fetch('/public/app.json')
        .then(res => res.json())
        .then(data => {
            setCart(data)
        })
    },[])

    const [category , setCategory] = useState(null);
    console.log(category);

    const religious = cart.filter(car => car.Category == 'religious');
    const charity = cart.filter(car => car.Category == 'charity');
    const social = cart.filter(car => car.Category == 'social');



  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row justify-between my-8 outline-none">
        <div>
          <select onChange={(e) => setCategory(e.target.value)} className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Search by - Category
            </option>
            <option value='charity'>Search by - Relagious</option>
            <option value='social'>Search by - Social</option>
            <option value='relogious'>Search by - Charity</option>
          </select>

        </div>
        <div>
            <button className="btn btn-active">Add New Item</button>
        </div>
      </div>

      {/* cart */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {
            cart && cart.map((car , idx) => <Card key={idx} car={car}></Card>)
         }
      </div>
    </div>
  );
};

export default Event;
