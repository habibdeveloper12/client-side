import React from 'react';

const Seperate = ({data,id}) => {
  console.log(data)
 
  return (
    <>
      <tr>
      <th scope="row">{id}</th>
      <td>{data.name}</td>
      <td> {
        data.categories?.map((value)=>{
         return  <p>{value.label} ,</p> 
        })
        
        }</td>
      <td>{data.AntdCheckbox ? "true":"false"}</td>
    </tr>
    </>
  );
};

export default Seperate;