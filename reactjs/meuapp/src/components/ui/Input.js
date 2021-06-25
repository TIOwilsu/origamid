import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Input = ({
  id,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      className={classNames({ error: error })}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default Input;
