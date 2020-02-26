import React from "react";
import { getQuestions, deleteQuestion } from "../api";
import { QuestionCard } from "./QuestionCard";

class AllQuestionsPage extends React.Component {
  state = { questions: null };
  render() {
    if (this.state.questions) {
      return (
        <div>
          <ul>
            {this.state.questions.map(question => {
              return (
                <section>
                  <QuestionCard
                    question={question}
                    key={question.question_id}
                    removeQuestion={this.removeQuestion}
                  />
                </section>
              );
            })}
          </ul>
        </div>
      );
    } else return <div></div>;
  }

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = () => {
    getQuestions()
      .then(questions => {
        console.log(questions);
        this.setState({ questions });
      })
      .catch(err => {
        console.log(err);
      });
  };

  removeQuestion = question_id => {
    deleteQuestion(question_id).catch(err => {
      console.log(err);
    });

    this.setState(currentState => {
      const newQuestions = currentState.questions.filter(question => {
        return question.question_id !== question_id;
      });
      return { questions: newQuestions };
    });
  };
}

export default AllQuestionsPage;
