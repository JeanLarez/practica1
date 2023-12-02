import "../assets/styles/card.css";

const Card = ({ user }) => {
  return (
    <div className="card-user">
      <article className="article-user">
        <img className="img-card-user" src={user.picture.large} alt="Avatar" />
        <div className="info-user">
          <h3>{`${user.name.first} ${user.name.last}`}</h3>
          <h6>Pais: {`${user.location.country}`}</h6>
          <h6>Ciudad: {`${user.location.city}`}</h6>
        </div>
      </article>
    </div>
  );
};
export default Card;
