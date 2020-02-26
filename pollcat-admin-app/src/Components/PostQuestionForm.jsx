import React from "react";
import DateTimePicker from "react-datetime-picker";
import { postAQuestion } from "../api";
//import AnswerOptions from "./AnswerOptions";

class PostQuestinForm extends React.Component {
  state = {
    question: "",
    dateHuman: new Date(),
    dateNumber: new Date().getTime(),
    questionStatus: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    img: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Question:
          <input
            type="text"
            name="question"
            onChange={this.handleTextInput}
            value={this.state.question}
          ></input>
        </label>

        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            onChange={this.handleTextInput}
            value={this.state.answer1}
          ></input>
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            onChange={this.handleTextInput}
            value={this.state.answer2}
          ></input>
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            onChange={this.handleTextInput}
            value={this.state.answer3}
          ></input>
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            onChange={this.handleTextInput}
            value={this.state.answer4}
          ></input>
        </label>
        <label>
          Answer 5:
          <input
            type="text"
            name="answer5"
            onChange={this.handleTextInput}
            value={this.state.answer5}
          ></input>
        </label>
        <label>
          Answer 6:
          <input
            type="text"
            name="answer6"
            onChange={this.handleTextInput}
            value={this.state.answer6}
          ></input>
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="img"
            onChange={this.handleTextInput}
            value={this.state.img}
          ></input>
        </label>
        <label>
          Question Status:
          <input
            type="text"
            name="questionStatus"
            onChange={this.handleTextInput}
            value={this.state.questionStatus}
          ></input>
        </label>
        <label>
          Start Time:
          <DateTimePicker
            onChange={this.handleDateTimeChange}
            value={this.state.dateHuman}
          />
        </label>
        <button>Add new question!</button>
      </form>
    );
  }

  handleDateTimeChange = dateHuman => {
    this.setState({ dateHuman, dateNumber: dateHuman.getTime() });
  };

  handleTextInput = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      question,
      dateHuman,
      questionStatus,
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6,
      img
    } = this.state;

    const answersSubmitted = [
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6
    ];

    const answerArray = answersSubmitted.filter(answer => answer !== "");

    console.log(question, dateHuman, questionStatus, answerArray, img);

    postAQuestion({
      question,
      startTime: dateHuman,
      img,
      questionStatus,
      answerArray
    }).catch(err => {
      console.log(err);
    });

    this.setState({
      question: "",
      dateHuman: new Date(),
      dateNumber: new Date().getTime(),
      questionStatus: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
      answer6: "",
      img: ""
    });
  };
}

export default PostQuestinForm;
