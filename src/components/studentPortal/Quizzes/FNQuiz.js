import React, {useState} from "react";
import StudentsMinNav from "../minNav/MinVav";
import Main from "./fnquizcomponents/main/Main";
import Quiz from "./fnquizcomponents/quiz/Quiz";
import End from "./fnquizcomponents/end/End";
import {QuizContext} from './fnquizcomponents/helpers/Contexts';
import './App.css';

const FNQuiz = () => {
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

export default FNQuiz;
