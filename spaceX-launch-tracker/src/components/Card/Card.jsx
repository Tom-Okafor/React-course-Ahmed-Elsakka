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
      <img
        alt="launch"
        src={
          !imageSource
            ? "https://i.pinimg.com/originals/f0/b8/3b/f0b83bfe08c85e745eb178b52fb00069.png"
            : imageSource
        }
      />
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
      {details && (
        <p>
          <strong>Details: </strong>
          {details}
        </p>
      )}

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
