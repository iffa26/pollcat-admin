import axios from "axios";

function postAQuestion(requestBody) {
  return axios
    .post("https://pollcat-backend.herokuapp.com/api/questions", requestBody)
    .then(({ question }) => {
      console.log(question);
      return question;
    });
}

export { postAQuestion };
