import PropTypes from "prop-types";

export default function Card({
  imageSource,
  altText,
  newClass,
  clickFunction,
  style,
}) {
  return (
    <div className={`card ${newClass}`} onClick={clickFunction} style={style}>
      <img src={imageSource} alt={altText} />
      <div className="face"></div>
    </div>
  );
}

Card.propTypes = {
  imageSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  newClass: PropTypes.string,
  clickFunction: PropTypes.func,
  style: PropTypes.object,
};
