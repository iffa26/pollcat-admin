import React from "react";

//import { Link } from "@reach/router";

function AnswersList(props) {
  const { answers } = props;

  if (answers) {
    return (
      <div>
        <ul>
          {answers.map(answer => {
            const answerObj = JSON.parse(answer);
            return <li key={answer}> Answers: {answerObj.answer} </li>;
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export { AnswersList };
