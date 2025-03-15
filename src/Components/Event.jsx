import React, { useEffect, useState } from "react";
import Card from "./Root/Card";
import { NavLink } from "react-router-dom";
import useCommon from "./Hook/useCommon";

const Event = () => {
     const [commons] = useCommon([])
    const [cart , setCart] = useState(commons);
    const [filteredCart, setFilteredCart] = useState([]);
    console.log(commons);

    // useEffect(()=>{
    //     fetch('/public/app.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setCart(data)
    //     })
    // },[])

    const [category , setCategory] = useState(null);
    console.log(category);

    // function handleCatagory(e){
    //   const value = e.target.value;
    //   let filterCard;
    //   if (value === "religious") {
    //     filterCard =   cart.filter(car => car.Category == 'religious');
    //   } else if (value === "charity") {
    //      filterCard =  cart.filter(car => car.Category == 'charity');
    //   }
    //    else if (value === "social") {
    //      filterCard =  cart.filter(car => car.Category == 'social');
    //   }
    //   setCategory(filterCard);
    // }

    function handleCategory(e) {
      const value = e.target.value;
      if (value === "all") {
        setFilteredCart(cart);
      } else {
        const filtered = cart.filter((item) => item.Category === value);
        setFilteredCart(filtered);
      }
    }

    const religious = cart.filter(car => car.Category == 'religious');
    const charity = cart.filter(car => car.Category == 'charity');
    const social = cart.filter(car => car.Category == 'social');



  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row justify-between my-8 outline-none">
      <div className="flex flex-col md:flex-row justify-between my-8">
        <select
          onChange={handleCategory}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="all">All Categories</option>
          <option value="religious">Religious</option>
          <option value="charity">Charity</option>
          <option value="social">Social</option>
        </select>
      </div>

          {/* <div className="space-y-2 border p-4 shadow">
          <h3 className="text-lg font-medium">Category</h3>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="charity"
              className="accent-pink-500"
              onChange={handleCatagory} 
            />
            <span>charity</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="social"
              className="accent-pink-500"
              onChange={handleCatagory} 
            />
            <span>social</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="relogious"
              className="accent-pink-500"
              onChange={handleCatagory} 
            />
            <span>relogious</span>
          </label>
        </div> */}
        <div>
            <NavLink to={'/addEvent'}>
            <button className="btn btn-active bg-black text-white">Add New Item</button>
            </NavLink>
        </div>
      </div>

      {/* cart */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {
            commons && commons.map((car , idx) => <Card key={idx} car={car}></Card>)
         }
         {/* {
            cart && cart.map((car , idx) => <Card key={idx} car={car}></Card>)
         } */}
      </div>

        

    </div>
  );
};

export default Event;
