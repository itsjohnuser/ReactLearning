import React, {useState} from "react";

function MyComponent (){
  const [name , setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const [name2, setName2] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  const handleClick = () => {
    setName("John Doe");
  };
  const incrementAge = () => {
    setAge(age + 2);
  };
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };
  const handleNameChange = (e) => {
    setName2(e.target.value);
  };
  const handleQuantityChange = (e)=>{
    setQuantity(e.target.value);
  }
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  }
  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  }
  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  }
  return(
    <div>
      <input type="text" value={name2} onChange={handleNameChange} />
      <p>Name : {name2}</p>

      <input value={quantity} type="number" onChange={handleQuantityChange}/>
      <p>Qunatity:{quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery instructions"/>
      <p>Comment :{comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="default">Select</option>
        <option value="cash">Cash</option>
        <option value="card">Card</option>
        <option value="online">Online</option>
        <option value="cod">COD</option>
      </select>
      <p>payment: {payment}</p>

      <label >
        <input type="radio" value="pick up" 
                checked = {shipping === "pick up"}
                onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
      <input type="radio" value="Delivery" 
                checked = {shipping === "Delivery"}
                onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>


      <p>Name :{name}</p>
      <button onClick={handleClick}>Set Name</button>

      <p>Age:{age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed :{isEmployed ? "yes":"No"}</p>
    <button onClick={toggleEmployedStatus}>Toggle status</button>
    </div>

    

  );
}
export default MyComponent