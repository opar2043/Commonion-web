import React, { useEffect, useState } from 'react'

const useCommon = () => {
    const [commons , setCommons] = useState([]);
    useEffect(()=>{
     fetch('http://localhost:5000/commons')
     .then(res => res.json())
     .then(data => {
       setCommons(data)
     })
    },[])
    return [commons]
}
export default useCommon