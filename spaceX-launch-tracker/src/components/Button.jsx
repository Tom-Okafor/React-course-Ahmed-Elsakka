import PropTypes from "prop-types";

export default function Button({ className, clickFunction, value }) {
  return (
    <button className={className} onClick={clickFunction}>
      {value}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  clickFunction: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
