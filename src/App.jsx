import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ButtonClick from "./ButtonClick";
function App() {
  const fruits = [
    {id:1, name:"apple", calories:95},
     {id:2, name:"banana", calories:45}, 
     {id:3, name:"pineapple", calories:104}, 
     {id:4, name:"peach", calories:23}
  ];
  const vegetables = [
    {id:5, name:"bringal", calories:45},
     {id:6, name:"calery", calories:55}, 
     {id:7, name:"carrot", calories:154}, 
     {id:8, name:"corn", calories:223}
  ];
  
  return(
    <>
      <Header/>
      <Food/>
      <Footer/>
      
        <Card  img = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=120&h=750&dpr=2" alt="profile-picture"  name="pizza card" details="this is react lesson card"/>
        <Card img = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=120&h=750&dpr=2" alt="profile-picture"
        name="biryani card" details="this is react lesson card"/>
        <Card img = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=120&h=750&dpr=2" alt="profile-picture" name="chicken card" details="this is react lesson card"/>
        <Card img = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=120&h=750&dpr=2" alt="profile-picture" name="fruitsalad card" details="this is react lesson card"/>
        <Card img = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=120&h=750&dpr=2" alt="profile-picture" name="burger card" details="this is react lesson card"/>
        <Card img = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=120&h=750&dpr=2" alt="profile-picture" name="salad card" details="this is react lesson card"/>
        <Card/>

      <Button/>
      <UserGreeting isLoggedIn = {false} username="John code"/>
      <UserGreeting isLoggedIn = {true}/>
      <List items = {fruits} category = "Fruits"/>
      <List items = {vegetables} category = "Vegetables"/>

      <ButtonClick/>
    

    </>
    
  );
}

export default App
