import React from "react";
import Radios from "../../../components/ui/Radios";

const CardQuestion = ({ data, onChange }) => {
  const [value, setValue] = React.useState(false);
  const { question, answer, options } = data;
  const items = options.map((option) => ({
    name: option,
    value: option,
    label: option,
  }));

  const change = (answered) => {
    const isCorrect = answered === answer;
    setValue(isCorrect);
    onChange(value);
  };

  return (
    <div className="question">
      <div className="question-container">
        <h4 className="question-title">{question}</h4>
        <div className="question-options">
          <Radios items={items} onChange={(value) => change(value)} />
        </div>
      </div>
    </div>
  );
};

export default CardQuestion;
