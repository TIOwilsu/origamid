import React from "react";

const Exercise2 = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: "R$ 2000",
      colors: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      name: "Notebook",
      price: "R$ 3000",
      colors: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      name: "Tablet",
      price: "R$ 1500",
      colors: ["#365069", "#47c1c8", "#f95786"],
    },
  ];
  return (
    <ul>
      {products.map(({ id, name, price, colors }) => (
        <li className="produto" key={id}>
          <h2 className="name">{name}</h2>
          <p className="price">Preço: {price}</p>
          <ul className="colors">
            {colors.map((color, key) => (
              <li
                className="color"
                key={key}
                style={{ backgroundColor: color }}
              >
                {color}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Exercise2;
