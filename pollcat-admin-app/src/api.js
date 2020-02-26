import axios from "axios";

export const getQuestions = () => {
  return axios
    .get("https://pollcat-backend.herokuapp.com/api/questions")
    .then(({ data: { questions } }) => {
      return questions;
    });
};

export const postAQuestion = requestBody => {
  return axios
    .post("https://pollcat-backend.herokuapp.com/api/questions", requestBody)
    .then(({ question }) => {
      return question;
    });
};

export const deleteQuestion = question_id => {
  return axios.delete(
    `https://pollcat-backend.herokuapp.com/api/questions/${question_id}`
  );
};
