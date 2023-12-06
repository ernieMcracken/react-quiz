export function Progress({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1} </strong> / {numQuestions}{" "}
      </p>
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}
