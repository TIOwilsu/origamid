import React from "react";
import InputGroup from "./InputGroup";
import Radio from "./Radio";

const Radios = ({ items, onChange }) => {
  const [value, setValue] = React.useState("");

  const change = (itemValue) => {
    setValue(itemValue);
    onChange(itemValue);
  };
  const isChecked = (itemValue) => value === itemValue;

  return (
    <div className="radios">
      {items.map((item, key) => (
        <InputGroup label={item.label} key={key}>
          <Radio
            id={`radios-radio-${key}`}
            value={item.value}
            name={item.name}
            checked={isChecked(item.value)}
            onChange={(value) => change(value)}
          />
        </InputGroup>
      ))}
    </div>
  );
};

export default Radios;
