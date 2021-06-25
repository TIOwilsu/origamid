import React from "react";

const InputGroup = ({ children, label = "" }) => {
  const [id] = React.useState(children.props.id);
  const [error, setError] = React.useState(children.props.error);

  React.useEffect(() => {
    setError(children.props.error);
  }, [children]);

  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}
      {children}
      {error && <span className="input-group-error">{error}</span>}
    </div>
  );
};

export default InputGroup;
