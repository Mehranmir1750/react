export default function Result({ result, setScreen }) {
  const descriptions = {
    Thinker: "You are logical and love analyzing things 🧠",
    Leader: "You are confident and take charge 🔥",
    Creative: "You are imaginative and expressive 🎨",
    Calm: "You are peaceful and balanced 🌿"
  };

  return (
    <div className="card">
      <h2>You are a {result}!</h2>
      <p>{descriptions[result]}</p>

      <button onClick={() => setScreen("start")}>
        Restart
      </button>
    </div>
  );
}