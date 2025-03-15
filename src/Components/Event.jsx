import React, { useEffect, useState } from "react";
import Card from "./Root/Card";
import { NavLink } from "react-router-dom";

const Event = () => {
  //  const [commons] = useCommon([])
  const [commons, setCommons] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(`https://task-management-server-one-gamma.vercel.app/commons?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCommons(data);
      });
  }, [category]);
  console.log(category);
  

  return (
    <div className="md:my-8 my-5">
      <div className="flex flex-row justify-between items-center my-2 outline-none">
        <div className="flex flex-col md:flex-row justify-between my-8">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="all">All Categories</option>
            <option value="religious">Religious</option>
            <option value="charity">Charity</option>
            <option value="social">Social</option>
          </select>
        </div>
        <div>
          <NavLink to={"/addEvent"}>
            <button className="btn btn-active bg-black text-white">
              Add New Item
            </button>
          </NavLink>
        </div>
      </div>

      {/* cart */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {commons &&
          commons.map((car, idx) => <Card key={idx} car={car}></Card>)}
      </div>
    </div>
  );
};

export default Event;
