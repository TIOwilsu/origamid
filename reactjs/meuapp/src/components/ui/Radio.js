import React from "react";

const Radio = ({ value = "", checked = false, ...props }) => {
  const [localValue, setLocalValue] = React.useState(checked);
  const change = () => {
    if (!localValue) setLocalValue(!localValue);
  };

  return (
    <input
      type="radio"
      value={value}
      checked={localValue}
      onChange={change}
      {...props}
    />
  );
};

export default Radio;
