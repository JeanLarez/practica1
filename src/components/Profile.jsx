import "../assets/styles/profile.css";

// eslint-disable-next-line react/prop-types
const Profile = ({ urlImg }) => {
  return <img className="dev" src={urlImg} alt="Dev" />;
};

export default Profile;
