import PropTypes from "prop-types";

const Card = ({
  name,
  date,
  rocket,
  launchSite,
  details,
  webcast,
  imageSource,
}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img alt="launch" src={imageSource} />
      <p>
        <strong>Date: </strong>
        {date}
      </p>
      <p>
        <strong>Rocket: </strong>
        {rocket}
      </p>
      <p>
        <strong>Launch Pad: </strong>
        {launchSite}
      </p>
      <p>
        <strong>Details: </strong>
        {details}
      </p>
      <a href={webcast} target="blank">
        Watch Launch
      </a>
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
  imageSource: PropTypes.string,
};
export default Card;
