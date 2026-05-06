import { useState } from "react";
import questions from "../data/questions";
import QuestionCard from "./QuestionCard";

export default function Quiz({ setScreen, setResult }) {
  const [current, setCurrent] = useState(0);

  const [scores, setScores] = useState({
    Thinker: 0,
    Leader: 0,
    Creative: 0,
    Calm: 0
  });

  function handleAnswer(type) {
    setScores(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      const finalResult = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
      );

      setResult(finalResult);
      setScreen("result");
    }
  }

  return (
    <div className="card">
      <QuestionCard
        data={questions[current]}
        onAnswer={handleAnswer}
      />
      <p>{current + 1} / {questions.length}</p>
    </div>
  );
}