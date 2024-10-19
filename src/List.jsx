
function List (props){
  
  //fruits.sort((a,b)=>a.name.localeCompare(b.name));// Alphabetical order
  //fruits.sort((a,b)=>b.name.localeCompare(a.name));//reverse alphabetical order
  //fruits.sort((a,b)=> a.calories-b.calories); //numerical order
  //fruits.sort((a,b)=>b.calories-a.calories); // reverse numerical order
  
  //const lowCalFruits = fruits.filter(fruit=> fruit.calories < 100) // low calories
  
  //const highCalFruits = fruits.filter(fruit=> fruit.calories >= 100)
  const category = props.category;
  const itemList = props.items

  const listItems = itemList.map (itemList => <li key={itemList.id}>
     {itemList.name}: {itemList.calories}  {/*displays fruit name and calories*/}  </li>);
  
  return (
    <div className="food-items">
      <h3 className="list-category">{category}</h3>
      <ul className="list-item">
        {listItems}
      </ul>
    </div>
  )
  

}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired
  })),
}

List.defaultProps = {
  items: [],
  category: "Default Category"
};

export default List