import React from "react";

const Radio = ({ value = "", checked = false, onChange, ...props }) => {
  const change = ({ target }) => onChange(target.value);

  return (
    <input
      type="radio"
      value={value}
      checked={checked}
      onChange={change}
      {...props}
    />
  );
};

export default Radio;
