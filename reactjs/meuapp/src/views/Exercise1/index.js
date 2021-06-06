import React from "react";

const Exercise1 = () => {
  const clients = [
    {
      cliente: "Luana",
      idade: 27,
      compras: [
        { nome: "Notebook", preco: "R$ 2500" },
        { nome: "Geladeira", preco: "R$ 3000" },
        { nome: "Smartphone", preco: "R$ 1500" },
      ],
      ativa: true,
    },
    {
      cliente: "Mario",
      idade: 31,
      compras: [
        { nome: "Notebook", preco: "R$ 2500" },
        { nome: "Geladeira", preco: "R$ 3000" },
        { nome: "Smartphone", preco: "R$ 1500" },
        { nome: "Guitarra", preco: "R$ 3500" },
      ],
      ativa: false,
    },
  ];
  const total = (items) => {
    return items.reduce((total, { preco }) => {
      const string = preco.replace("R$ ", "");
      const number = parseInt(string);
      total += number;
      return total;
    }, 0);
  };
  return (
    <section>
      <ul>
        {clients.map(({ cliente, idade, compras, ativa }, clientKey) => (
          <li className="client" key={clientKey}>
            <p className="name">Cliente: {cliente}</p>
            <p className="age">Idade: {idade}</p>
            <p className="situation">
              Situação:{" "}
              <span style={{ color: ativa ? "green" : "red" }}>
                {ativa ? "Ativa" : "Inativa"}
              </span>
            </p>
            <p className="total">Total: {`R$ ${total(compras)}`}</p>
            {total(compras) > 10000 && (
              <p className="msg">Voce esta gastando muito</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Exercise1;
