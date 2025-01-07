import PropTypes from "prop-types";

export default function Card({ imageSource, altText, newClass, clickFunction }) {
  return (
    <div className={`card ${newClass}`} onClick={clickFunction}>
      <img src={imageSource} alt={altText} />
      <div className="face"></div>
    </div>
  );
}

Card.propTypes = {
  imageSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  newClass: PropTypes.string,
  clickFunction: PropTypes.func
};
