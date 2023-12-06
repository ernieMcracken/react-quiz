import { Options } from "./Options";
import { NextButton } from "./NextButton";

export function Question({ question, dispatch, answer, index, numQuestions }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
      ></Options>
    </div>
  );
}
