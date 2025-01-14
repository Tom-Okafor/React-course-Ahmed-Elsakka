import PropTypes from "prop-types";

export default function Card({
  imageSource,
  altText,
  newClass,
  clickFunction,
  style,
}) {
  return (
    <div className={`card ${newClass}`} onClick={clickFunction} style={style} role="button" aria-roledescription="card buttons. click on them to flip the card" tabIndex={0}>
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
