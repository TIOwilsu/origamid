import React from "react";
import Checkbox from "./Checkbox";
import InputGroup from "./InputGroup";

const Checkboxes = ({ items = [] }) => {
  const [values, setValues] = React.useState([]);
  const change = ({ target }) => {
    if (target.checked) {
      setValues([...values, target.value]);
    } else {
      setValues(values.filter((value) => value !== target.value));
    }
  };
  return (
    <div className="checboxes">
      {items.map((item, key) => (
        <InputGroup label={item.label} key={key}>
          <Checkbox
            id={`checkboxes-checkbox-${key}`}
            value={item.value}
            name={item.name}
            onChange={(event) => change(event)}
          />
        </InputGroup>
      ))}
    </div>
  );
};

export default Checkboxes;
