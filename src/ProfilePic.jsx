function ProfilePic (){
  const imageUrl = './src/assets/react.svg';
  const handleClick = (e) => e.target.style.display='none';
  return (
    <img  onClick={(e)=>handleClick(e)} className="profile-pic" src={imageUrl} alt="react-logo" />
  );
}
export default ProfilePic;