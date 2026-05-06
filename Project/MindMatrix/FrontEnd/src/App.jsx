import { useState } from "react";

import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {

  const [started, setStarted] = useState(false);

  const [finalScores, setFinalScores] = useState(null);

  return (
    <div>

      {
        !started ? (

          <Start onStart={() => setStarted(true)} />

        ) : finalScores ? (

          <Result scores={finalScores} />

        ) : (

          <Quiz setFinalScores={setFinalScores} />

        )
      }

    </div>
  );
}

export default App;