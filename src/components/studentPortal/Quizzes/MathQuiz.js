import React, {useState} from "react";
import Main from "./mathquizcomponents/main/Main";
import Quiz from "./mathquizcomponents/quiz/Quiz";
import End from "./mathquizcomponents/end/End";
import {QuizContext} from './mathquizcomponents/helpers/Contexts';
import './App.css';

const MathQuiz = () => {
  const [counter, setCounter] = useState(3000);
  const [questions, setQuestions] = useState();
  const [gameState, setGameState] = useState("main");
  const [score, setScore] = useState(0);

  return <div className="App" id="app">
    <QuizContext.Provider value={{gameState, setGameState, score, setScore, questions, setQuestions, counter, setCounter}}>
      {gameState === "main" && <Main/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "end" && <End/>}
    </QuizContext.Provider>
  </div>
};

export default MathQuiz;
