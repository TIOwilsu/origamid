import React from "react";

const InputGroup = ({ children, label = "" }) => {
  const [id] = React.useState(children.props.id);
  const [error, setError] = React.useState(children.props.error);

  React.useEffect(() => {
    setError(children.props.error);
  }, [children]);

  const isTag = (value) => {
    return children.type.name === value;
  };

  return (
    <div
      className="input-group"
      style={{
        display: isTag("Checkbox") || isTag("Radio") ? "flex" : "block",
        flexDirection:
          isTag("Checkbox") || isTag("Radio") ? "row-reverse" : "row",
        justifyContent:
          isTag("Checkbox") || isTag("Radio") ? "flex-end" : "flex-start",
      }}
    >
      {label && <label htmlFor={id}>{label}</label>}
      {children}
      {error && <span className="input-group-error">{error}</span>}
    </div>
  );
};

export default InputGroup;
