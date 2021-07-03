import React from "react";

const Feedback = ({ items }) => {
  const answer = (value) => (value ? "Acertou" : "Errou");

  return (
    <div className="feedback">
      <h4 className="feedback-title">Respostas</h4>
      <ul className="feedback-options">
        {items.map((item, key) => (
          <li className="feedback-option" key={key}>
            <h6 className="feedback-option-title">{`Questão 0${key + 1}`}</h6>
            <p className="feedback-option-text">{answer(item)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
