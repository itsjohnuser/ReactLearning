import propTypes from 'prop-types';

function UserGreeting(props){
  
  // if(props.isLoggedIn){
  //   return <h2> Welcome {props.username}</h2>
  // }
  // else {
  //   return <h2>Please log in to continue</h2>
  // }
  const welcomeMessage = <h2 className="welcome-message">Welcome{props.username}</h2>
  const loginPromt = <h2 className="login-promt"> Please log in to continue</h2>

  return(
    props.isLoggedIn ? welcomeMessage : loginPromt
      
      
  );
}

UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool.isRequired,
  username: propTypes.string.isRequired
}
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: 'Guest'
}

 
export default UserGreeting