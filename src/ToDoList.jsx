import React, {useState, useEffect} from "react";



function ToDoList(){
  const [tasks,setTasks] = useState(["Eat Breakfast", "Take a shower", "walk the dog"]);
  const [newTask,setNewTask] = useState([]);
  const[count,setCount] = useState(0);
  const [color,setColor] = useState("green");
  
  useEffect(()=>{
    document.title= `count: ${count} ${color}`
  },[count,color]);

  function addCount(){
    setCount(c=>c+1);
  }
  function subtract(){
    setCount(c=>c-1);
  }

  function colorChange(){
    setColor(c=>c === "green" ? "red" : "green");
  }
  const handleInputChange = (e)=>{
    setNewTask(e.target.value);
    




  }
  function addTask(){
    if(newTask.trim() === ""){
      alert("Please enter a task");
      return;
    }
    setTasks(t=>[...t,newTask]);
    setNewTask("");
  }

  function deleteTask(index){
    const updatedTask = tasks.filter((Element,i)=> i !==index);
    setTasks(updatedTask);

  }
  function moveTaskUp(index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index-1]] = 
      [updatedTasks[index-1],updatedTasks[index]]
      setTasks(updatedTasks);
    }


  }
  function moveTaskDown(index){
    if(index < tasks.length-1){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index+1]] = 
      [updatedTasks[index+1],updatedTasks[index]]
      setTasks(updatedTasks);
    }

  }

  return(<>
  <p style={{color:color}}>count:{count}</p>
  <button onClick={addCount}>Add</button>
  <button onClick={subtract}>Subtract</button>
  <button onClick={colorChange}>COlor change</button>
  <div className="to-do-list">
    <h1>To-Do-List</h1>
    <div>
      <input type="text" placeholder="Enter a task ..." value={newTask} onChange={handleInputChange}/>
      <button className="add-button" onClick={addTask}>Add</button>
    </div>

    <ol>
      {tasks.map((tasks,index) =>
      <li key={index}>
        <span className="text">{tasks}</span>
        <button className="Delete-button" onClick={()=>deleteTask(index)}>Delete</button>
        <button className="Move-button" onClick={()=>moveTaskUp(index)}>up</button>
        <button className="Down-button" onClick={()=>moveTaskDown(index)}>Down</button>
      </li>
      )}

    </ol>
  </div>
  
  </>)

}
export default ToDoList;