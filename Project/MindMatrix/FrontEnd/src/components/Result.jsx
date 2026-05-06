import "../styles/Result.css"

import { useEffect, useState } from "react";

function Result({ scores }) {

  const [analysis, setAnalysis] = useState("");



  useEffect(() => {

    async function getAnalysis() {

      try {

        const response = await fetch(
          "http://localhost:5000/analyze",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify(scores)
          }
        );

        const data = await response.json();

        setAnalysis(data.result);

      }

      catch (error) {

        console.log(error);

      }

    }

    getAnalysis();

  }, []);




  return (

    <div className="body-result">

      <h1 className="heading">Your Personality Analysis</h1>

      <p className="score">Openness: {scores.openness}</p>

      <p className="score">
        Conscientiousness:
        {scores.conscientiousness}
      </p>

      <p className="score">Extraversion: {scores.extraversion}</p>

      <p className="score">Agreeableness: {scores.agreeableness}</p>

      <p className="score">Neuroticism: {scores.neuroticism}</p>

      <hr />

      <h2 className="explain">AI Explanation</h2>

      <p className="ai-explain">{analysis}</p>

    </div>

  );
}

export default Result;