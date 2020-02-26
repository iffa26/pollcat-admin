import React from "react";

class AnswerOptions extends React.Component {
  state = {
    numberOfAnswers: 2
  };
  render() {
    return <div>{this.createAnswerOptionsForm()}</div>;
  }

  createAnswerOptionsForm = () => {
    let answerOptionsArray = [];

    for (let i = 0; i < this.state.numberOfAnswers; i++) {
      answerOptionsArray.push(i);
    }

    return (
      <ul>
        {answerOptionsArray.map(answer => {
          return answer;
        })}
      </ul>
    );
  };
}

export default AnswerOptions;
