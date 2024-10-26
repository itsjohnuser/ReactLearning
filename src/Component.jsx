import React, {useState} from "react";

function Component(){

  const [Car, setCar] = useState({
    year:2024,
    make:"Ford",
    model:"Camry",
  
  });
  
  function handleYearChange(e){
    setCar(C=>({...C,year:e.target.value}))

  }

  function handleMakeChange(e){
    setCar(C=>({...C, make:e.target.value}))

  }

  function handleModelChange(e){
    
    setCar(C=>({...C, model:e.target.value}))
  }
  

  return(
    <div>
      <p>Your favorite car is : {Car.year} {Car.make} {Car.model}</p>
      <input  type="number" value= {Car.year} onChange={handleYearChange}/><br/>
      <input type="text" value={Car.make} onChange={handleMakeChange}/><br/>
      <input type="text" value={Car.model} onChange={handleModelChange}/><br/>

    </div>
  )

}
export default Component
