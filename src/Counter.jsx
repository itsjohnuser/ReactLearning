import React,{useState} from 'react';


function Counter(){
  const [Count,setCount] = useState(0);

const increment = ()=>{ 
  setCount(C=>C + 1);
  setCount(C=>C + 1);
  setCount(C=>C + 1);
}

const decrement = ()=>{
  setCount(C=>C - 1); //updater function arrow function
  setCount(C=>C - 1);
  setCount(C=>C - 1);
}
const reset = ()=>{
  setCount(0);
};

return(
  <div className='counter-container'>
    <p className='count-display'>{Count}</p>
    <button className='counter-button' onClick={decrement}>Decrement</button>
    <button className='counter-button' onClick={reset}>Reset</button>
    <button className='counter-button' onClick={increment}>Increment</button>


  </div>
);

}
export default Counter