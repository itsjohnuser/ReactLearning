import React, {useState} from "react";

function MyComponent (){
  const [name , setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const handleClick = () => {
    setName("John Doe");
  };
  const incrementAge = () => {
    setAge(age + 2);
  };
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }
  ;
  return(
    <div>
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