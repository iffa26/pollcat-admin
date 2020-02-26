import React from "react";

function DeleteQuestionButton(props) {
  const { question_id, removeQuestion } = props;
  return (
    <button
      onClick={() => {
        removeQuestion(question_id);
      }}
    >
      delete this question?
    </button>
  );
}

export { DeleteQuestionButton };
