import React from "react";

const Form = ({ children, onSubmit }) => {
  const submit = (event) => {
    event.preventDefault();
    const $form = event.target;
    const fields = [...$form.querySelectorAll("input")];
    let data = {};

    if (fields.length) {
      data = fields.reduce((obj, item) => {
        const name = item.attributes.name.value;
        const { value } = item.attributes.value;
        return { ...obj, [name]: value };
      }, {});
    }
    onSubmit(data);
  };
  return (
    <form className="form" onSubmit={submit}>
      {children.map((child) => child)}
    </form>
  );
};

export default Form;
