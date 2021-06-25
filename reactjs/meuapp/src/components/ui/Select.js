import React from "react";

const Select = ({ placeholder, value = "", items = [], ...props }) => {
  const [localValue, setLocalValue] = React.useState(value);
  const change = ({ target }) => setLocalValue(target.value);

  return (
    <select onChange={change} value={localValue} {...props}>
      <option disabled value="">
        {placeholder}
      </option>
      {items.map((item, index) => (
        <option key={index} {...item.props}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
