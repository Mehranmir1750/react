import "../styles/Start.css"

function Start({ onStart }) {

  return (
  <div className="start-body">

    <div className="card">

        <h1 className="heading">
            MindMatrix Quiz
        </h1>

        <button className="start-button" onClick={onStart}>
            Start Quiz
        </button>

    </div>

</div>
  );
}

export default Start;