import "./Card.css";

export default function Card({ img, name, bio }) {
  return (
    <div className="card">
      <img src={img} alt="user" />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}
