import React from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from "react-hook-form";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
  Checkbox as AntdCheckbox,
  Switch as AntdSwitch,
  Slider as AntdSlider,
  Radio
} from "antd";
import { colourOptions } from './data';
import Info from './Info';


const Home = () => {
  const animatedComponents = makeAnimated();
  const { register, formState: { errors }, handleSubmit , reset, setValue, control } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    
    fetch('https://job-server-87dv.onrender.com/info', {
      method: 'POST',
      body: JSON.stringify(
        data
     ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        alert("Success")
      });

  }
  return (
   <div>
     <form onSubmit={handleSubmit(onSubmit)} className='container mx-auto '>
       <h2>Please enter your name and pick the Sectors you are currently involved in. </h2>
       <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name: </label> <br />
  <input {...register("name", { required: true })} type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
  
</div>
{/* <select class="form-select" className='my-3' multiple aria-label="multiple select example">
  <option selected>Sectors: </option>
  <option value="1">Manufacturing</option>
  <option value="2">Construction materials</option>
  <option value="3">Electronics and Optics</option>
  <option value="3">dairy products</option>
  
</select> */}
<Controller
    control={control}
    name="categories"
    render={({
        field: { onChange, onBlur, value, name, ref },
    }) => (
      <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={colourOptions}
          onChange={onChange}
      
            onBlur={onBlur}
            value={value}
            name={name}
            ref={ref}
    />
       
    )}
/>


    <section>
      <label>Agree terms </label>
      <Controller
        control={control}
        name="AntdCheckbox"
        render={({ field: { value, onChange } }) => (
          <AntdCheckbox
            checked={value}
            onChange={(e) => {
              onChange(e.target.checked);
            }}
          />
        )}
      />
    </section>

   <button type="submit" class="btn btn-primary">Submit</button>

    </form>
    <Info/>
   </div>
  );
};

export default Home;