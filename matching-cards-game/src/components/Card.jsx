import PropTypes from "prop-types";

export default function Card({ imageSource, altText, newClass }) {
  return (
    <div className={`card ${newClass}`}>
      <img src={imageSource} alt={altText} />
      <div className="face"></div>
    </div>
  );
}

Card.propTypes = {
  imageSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  newClass: PropTypes.string,
};
