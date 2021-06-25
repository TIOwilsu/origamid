import React from "react";
import Checkboxes from "../../../components/ui/Checkboxes";

const CheckboxesColor = () => {
  const items = [
    { label: "Azul", name: "blue", value: "blue" },
    { label: "Laranha", name: "orange", value: "orange" },
    { label: "Preto", name: "black", value: "black" },
    { label: "Branco", name: "white", value: "white" },
    { label: "Roxo", name: "purple", value: "purple" },
  ];
  return <Checkboxes items={items} />;
};

export default CheckboxesColor;
