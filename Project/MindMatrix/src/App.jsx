import { useState } from "react";
import Start from "./components/Start";
import questions from "./data/questions";

function App(){

  const [started , setStarted] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [scores , setScores] = useState({
    introvert : 0,
    extrovert : 0
  });

  return(
    <div>
      {
        !started ?(
          <Start onStart={() => setStarted(true)}></Start>
        ): currentQuestion<questions.length ?(
          <QuizCard
          data = {questions[currentQuestion]}
          ></QuizCard>
        ) : (
          <Result></Result>
        )
      }
    </div>
  );
}

export default App;