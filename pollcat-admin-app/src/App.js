import React from "react";
import Header from "./Components/Header";
import QuestionForm from "./Components/QuestionForm";
import AllQuestionsPage from "./Components/AllQuestionsPage";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Router } from "@reach/router";
import PatchQuestionPage from "./Components/PatchQuestionPage";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <AllQuestionsPage path="/" />
        <QuestionForm path="/newquestion" />
        <PatchQuestionPage path="/questions/:question_id" />
      </Router>
    </div>
  );
}

export default App;
