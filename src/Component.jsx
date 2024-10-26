import React, {useState} from "react";

function Component(){

  const [Car, setCar] = useState({
    year:2024,
    make:"Ford",
    model:"Camry",
  
  });

  const [food,setFood] = useState(["apple", "orange", "Banana"]);

  function handleAddFood(){
    const newFood = document.getElementById("foodInput").value;
    setFood([...food,newFood]);
    document.getElementById("foodInput").value = "";

  }
  function handleRemoveFood(index){
    setFood(food.filter((_, i)=> i !==index));
  }
  
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

      <h2>
        List of Food
        </h2>
        <ul>
          {food.map((food,index)=> 
          <li key={index} onClick={()=>handleRemoveFood(index)}>
             {food}</li>)}
          <input type="text" id="foodInput" placeholder="Enter food name" />
          <button onClick={handleAddFood}>Add Food</button>
        </ul>
      

    </div>
  )

}
export default Component
