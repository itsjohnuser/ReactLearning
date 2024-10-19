import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import UserGreeting from "./UserGreeting";

function App() {
  
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

    </>
    
  );
}

export default App
