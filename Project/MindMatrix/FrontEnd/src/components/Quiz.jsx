import { useState } from "react";

import QuestionCard from "./QuestionCard";
import questions from "../data/questions";

function Quiz({ setFinalScores }) {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [scores, setScores] = useState({
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0
  });

  function handleAnswer(trait, value) {

  const updatedScores = {
    ...scores,
    [trait]: scores[trait] + value
  };

  setScores(updatedScores);

  const nextQuestion = currentQuestion + 1;

  if (nextQuestion < questions.length) {

    setCurrentQuestion(nextQuestion);

  } else {

    setFinalScores(updatedScores);

  }
}

  return (
    <QuestionCard
      data={questions[currentQuestion]}
      onAnswer={handleAnswer}
    />
  );
}

export default Quiz;