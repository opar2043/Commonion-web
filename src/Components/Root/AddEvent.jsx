import React, { useState } from 'react'
import useAxios from '../Hook/useAxios'
import Swal from 'sweetalert2'

const AddEvent = () => {

  const axiosSecure = useAxios()

    const [date , setDate] = useState(new Date())
    const [category , setCategory] = useState('social')
    function handleSubmit(e) {
      e.preventDefault();  // ✅ Fix: Add parentheses
  
      const form = e.target;
      const title = form.title.value;  // ✅ Correct way to access values
      const description = form.description.value;
      const image = form.image.value;
      const location = form.location.value;
   
  
      const obj = {
          title,
          description,
          image,
          location,
          date,
          category
      };
      axiosSecure.post("/commons" , obj).then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Event Added Succesfully",
          showConfirmButton: false,
          timer: 1500
        });
      });
  
      console.log(obj);
  }
  
  return (
    <div>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-4">Communion Form</h2>
  <form className="space-y-4" onSubmit={handleSubmit}>
    <div>
      <label className="block font-medium">Title</label>
      <input type="text" name='title' className="w-full p-2 border rounded" required />
    </div>
    <div>
      <label className="block font-medium">Description</label>
      <textarea name='description' className="w-full p-2 border rounded" required></textarea>
    </div>
    <div>
      <label className="block font-medium">Image</label>
      <input type="url" name='image' className="w-full p-2 border rounded" />
    </div>
    <div>
      <label className="block font-medium">Date</label>
      <input type="date" onChange={(e)=>setDate(e.target.value)} className="w-full p-2 border rounded" required />
    </div>
    <div>
      <label className="block font-medium">Location</label>
      <input type="text" name='location' className="w-full p-2 border rounded" required />
    </div>
    <div>
      <label className="block font-medium" >Category</label>
      <select onChange={e => setCategory(e.target.value)} className="w-full p-2 border rounded">
        <option value="charity">Charity</option>
        <option value="social">Social</option>
        <option value="religion">Religion</option>
      </select>
    </div>
    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
      Submit
    </button>
  </form>
</div>
    </div>
  )
}

export default AddEvent