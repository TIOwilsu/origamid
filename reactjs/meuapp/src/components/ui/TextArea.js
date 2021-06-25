import React from "react";

const TextArea = ({ value = "", ...props }) => {
  const [localValue, setLocalValue] = React.useState(value);

  const change = (value) => setLocalValue(value);

  return (
    <textarea
      value={localValue}
      onChange={({ target }) => change(target.value)}
      {...props}
    ></textarea>
  );
};

export default TextArea;
