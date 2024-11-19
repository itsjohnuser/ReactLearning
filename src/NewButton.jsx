import React,{useState, useEffect, useRef} from "react";

function NewButton(){
  const inputRef = useRef(null)
  

  useEffect(()=>{
    console.log('Component render')
    
  })

  function handleClick(){
    inputRef.current.focus();
    inputRef.current.style.background = 'red'
    
  }
  return(
    <div>
    <button onClick={handleClick}>
      Click me!
    </button>
    <input ref={inputRef}/>
    </div>
  )
}
export default NewButton;