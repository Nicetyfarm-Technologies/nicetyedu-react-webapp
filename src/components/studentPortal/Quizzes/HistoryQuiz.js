import React, {useState} from "react";
import StudentsMinNav from "../minNav/MinVav";
import Main from "./historyquizcomponents/main/Main";
import Quiz from "./historyquizcomponents/quiz/Quiz";
import End from "./historyquizcomponents/end/End";
import {QuizContext} from './historyquizcomponents/helpers/Contexts';
import './App.css';

const HistoryQuiz = () => {
  const [counter, setCounter] = useState(3000);
  const [questions, setQuestions] = useState();
  const [gameState, setGameState] = useState("main");
  const [score, setScore] = useState(0);

  return <div className="App" id="app">
    <StudentsMinNav />
    <QuizContext.Provider value={{gameState, setGameState, score, setScore, questions, setQuestions, counter, setCounter}}>
      {gameState === "main" && <Main/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "end" && <End/>}
    </QuizContext.Provider>
  </div>
};

export default HistoryQuiz;
