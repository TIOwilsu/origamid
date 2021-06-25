import React from "react";

const Checkbox = ({ id, name, value = "", checked = false, onChange }) => {
  const [localValue, setLocalValue] = React.useState(checked);
  const change = (event) => {
    setLocalValue(!localValue);
    onChange(event);
  };

  return (
    <input
      id={id}
      name={name}
      type="checkbox"
      checked={localValue}
      value={value}
      onChange={change}
    />
  );
};

export default Checkbox;
