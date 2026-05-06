import "../styles/QuestionCard.css"

function QuestionCard({ data, onAnswer }) {

  const options = [
    { text: "Strongly Agree", value: 2 },
    { text: "Agree", value: 1 },
    { text: "Neutral", value: 0 },
    { text: "Disagree", value: -1 },
    { text: "Strongly Disagree", value: -2 }
  ];

  return (
    <div className="quiz-body">

      <h2 className="question">
        {data.question}
      </h2>

      <div className="buttons">

        {
          options.map((opt, index) => (

            <button
              className="option-button"
              key={index}

              onClick={() =>
                onAnswer(
                  data.trait,
                  data.reverse
                    ? -opt.value
                    : opt.value
                )
              }
            >
              {opt.text}
            </button>

          ))
        }

      </div>

    </div>
  );
}

export default QuestionCard;