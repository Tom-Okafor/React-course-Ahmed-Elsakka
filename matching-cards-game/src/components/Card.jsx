import PropTypes from "prop-types";

export default function Card({ imageSource, altText }) {
  return (
    <div className="card">
      <img src={imageSource} alt={altText} />
    </div>
  );
}

Card.propTypes = {
  imageSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
