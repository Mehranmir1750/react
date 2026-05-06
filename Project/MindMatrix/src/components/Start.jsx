export default function Start({ onStart }) {
  return (
    <div className="card">
      <h1>MindMatrix Quiz</h1>

      <button onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}