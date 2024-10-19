

function Card(props){
  return(
    <div className="card">
      <img className="card-image" src={props.img} alt="profile-picture" />
      {/* <img className="card-image" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=120&h=750&dpr=2" alt="profile-picture" /> */}
      <h2 className="food-item">{props.name}</h2>
      <p className="food-description">{props.details}</p>



    </div>
  );

}
Card.defaultProps = {
  img: "https://via.placeholder.com/150",
  name: "Default Name",
  details: "Default Details"
};

export default Card