import React from "react";
import { DeleteQuestionButton } from "./DeleteQuestionButton";
import { AnswersList } from "./AnswerList";
//import { Link } from "@reach/router";

function QuestionCard(props) {
  const { question, removeQuestion } = props;
  return (
    <li key={question.question_id} className="QuestionCard">
      <section className="QuestionCard-title">
        <h3>Question: {question.question}</h3>
      </section>
      <section className="QuestionCard-info">
        <p> Start Time: {question.startTime} </p>
        <p> Status: {question.questionStatus}</p>
        <AnswersList answers={question.answerArray} />
        <DeleteQuestionButton
          question_id={question.question_id}
          removeQuestion={removeQuestion}
        />
      </section>
    </li>
  );
}

export { QuestionCard };
