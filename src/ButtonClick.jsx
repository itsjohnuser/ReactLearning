
function ButtonClick(){
  // let count = 0;
  // const handleClick = (name)=> {
  //   if(count <3){
  //     count++;
  //     console.log(`Hello ${name} you clicked ${count} times`);
  //   }else {
  //     console.log(`${name} ${count} times clicked successfully`);
  //   }
  // }
  
  // return(
  //   <button onClick={()=> handleClick('john')}>Click you </button>
  // );

  const handleClick = (e)=> e.target.textContent = 'OUCH!';
  return (
    <button onDoubleClick={(e)=> handleClick(e)}>Click me</button>
  );
}
export default ButtonClick