import React, { useState } from "react";
import { useEffect } from "react";


function Component3(){
const [Cars, setCars] = useState([]);
const [CarYear, setCarYear] = useState(new Date().getFullYear());
const [CarMake, setCarMake] = useState("");
const [CarModel, setCarModel] = useState("");
const [width,setWidth] = useState(window.innerWidth)
const [height,setHeight] = useState(window.innerHeight)


useEffect(()=>{
  window.addEventListener("resize",handleResize);
  console.log("Event Listner added")

  return()=>{
    window.removeEventListener("resize",handleResize)
    console.log("Event Listner Removed")
  }

},[]);


useEffect(()=>{
  document.title = `size : ${width} x ${height} `;
},[width,height])


function handleResize(){
  setWidth(window.innerWidth)
  setHeight(window.innerHeight)
}

function handleAddCar() {
  const newCar = {
    year: CarYear,
    make: CarMake,
    model: CarModel
  }
  setCars(C => [...C, newCar]);
  setCarYear(new Date().getFullYear());
  setCarMake("");
  setCarModel("");


}
function handleRemoveCar(index) {

  setCars(C => C.filter((_, i) => i!== index));

}
function handleYearChange(e) {

  setCarYear(e.target.value);
}
function handleMakeChange(e) {

  setCarMake(e.target.value);
}
function handleModelChange(e) {

  setCarModel(e.target.value);
}

return (
  <div>
    <p>window width:{width}px</p>
    <p>window height:{height}px</p>


    <h2>List of Cars</h2>


    <ul>
      {Cars.map((car, index) =>
        <li key={index} onClick={()=>handleRemoveCar(index)}>
          {car.year} {car.make} {car.model}
        </li>)}

    </ul>
    <input type="number" value={CarYear} onChange={handleYearChange} /><br />
    <input type="text" value={CarMake} onChange={handleMakeChange} placeholder="Enter car make" /><br />
    <input type="text" value={CarModel} onChange={handleModelChange} placeholder="Enter car model" /><br />
    <button onClick={handleAddCar}>Add Car</button>
  </div>
)
}
export default Component3