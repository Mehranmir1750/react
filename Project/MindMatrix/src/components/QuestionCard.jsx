export default function QuestionCard({ data}) {
  return (
    <div>
      <h2>{data.question}</h2>

      <div className="options">
        {data.options.map((opt, index) => (
          <button
            key={index}
            onClick={() => onAnswer(opt.type)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}