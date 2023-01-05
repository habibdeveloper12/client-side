import React, { useEffect, useState } from 'react';
import Seperate from './Seperate';

const Info = () => {
  const [value,setValue]=useState([])
  useEffect(()=>{
   fetch("https://job-server-87dv.onrender.com/info")
   .then(res=>res.json())
   .then(data=>setValue(data))
  },[])
  console.log(value);
  
  return (
    <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">checkBox</th>
    </tr>
  </thead>
  <tbody>
   {
    value.map((data,index)=>{
      return  <Seperate data={data} id={index+1}/>
    })
   }
  </tbody>
</table>
    </div>
  );
};

export default Info;