import React from "react";
import Button from "../../../components/ui/Button";
import Question from "./Question";
import Feedback from "./Feedback";

const Quiz = () => {
  const [position, setPosition] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const questions = [
    {
      question: "Qual método é utilizado para criar componentes?",
      options: [
        "React.makeComponent()",
        "React.createComponent()",
        "React.createElement()",
      ],
      answer: "React.createElement()",
      id: "p1",
    },
    {
      question: "Como importamos um componente externo?",
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      answer: 'import Component from "./Component"',
      id: "p2",
    },
    {
      question: "Qual hook não é nativo?",
      options: ["useEffect()", "useFetch()", "useCallback()"],
      answer: "useFetch()",
      id: "p3",
    },
    {
      question: "Qual palavra deve ser utilizada para criarmos um hook?",
      options: ["set", "get", "use"],
      answer: "use",
      id: "p4",
    },
  ];
  const next = () => {
    const count = position + 1;
    setPosition(count);
  };
  const change = (value) => {
    console.log(value);
    let items = [...answers];
    items[position] = value;
    setAnswers(items);
  };
  const disabled = () => {
    return answers[position] === undefined || answers[position] === null;
  };
  return (
    <div className="quiz">
      <div className="quiz-container">
        {questions[position] ? (
          <Question
            data={questions[position]}
            onChange={(value) => change(value)}
          />
        ) : (
          <Feedback items={answers} />
        )}
        {questions[position] && (
          <div className="quiz-buttons">
            <Button onClick={next} disabled={disabled()}>
              Proxima
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
