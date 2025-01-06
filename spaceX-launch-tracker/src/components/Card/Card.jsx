import PropTypes from "prop-types";

const Card = ({ name, date, rocket, launchSite, details, webcast }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{rocket}</p>
      <p>{launchSite}</p>
      <p>{details}</p>
      <a href={webcast}>Watch Launch</a>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  rocket: PropTypes.string,
  launchSite: PropTypes.string,
  details: PropTypes.string,
  webcast: PropTypes.string,
};
export default Card;
