import React, {useState, useContext, useEffect} from "react";
import {
  onSnapshot,
  query,
  collection,
} from "firebase/firestore";
import {db} from '../../../../firebase/config';
import { QuizContext } from '../helpers/Contexts';
import { FaHome } from "react-icons/fa"
// import { Questions } from "../helpers/Questions";
import './Main.css';

const Main = () => {

    const [allQuestions, setAllQuestions] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'quizmath'));
        const unSubscribe = onSnapshot(q, (querySnapshot) => {
          const companyBlogsArr = [];
          querySnapshot.forEach((doc) => {
            companyBlogsArr.push({ ...doc.data(), id: doc.id });
          });
          setAllQuestions(companyBlogsArr);
        });
        return () => unSubscribe();
      }, []);

    //Shuffle questions array
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    //Take 10 random questions array
    let questionsArray = shuffled.slice(0, 10);
    const { questions, setQuestions } = useContext(QuizContext);
    const { gameState, setGameState } = useContext(QuizContext);

    const d = new Date();
    var minutes;
    

    //set new 10 random question every time when components re-render
    useEffect(() => {
        setQuestions(questionsArray);
    })

    if(d.getMinutes()<10) {
        minutes="0"+d.getMinutes();
    } else {
        minutes = d.getMinutes();
    }

    return <div className="Main">
        <div className="terminal-wrapper fadeIn">
            <div className="terminal-top ">
                <div className="top-left">
                    <div className="red circle delay-0_5 fadeIn">

                    </div>
                    <div className="yellow circle delay-0_7 fadeIn">

                    </div>
                    <div className="green circle delay-0_9 fadeIn">

                    </div>
                </div>
                <div className="top-mid delay-1_3 fadeIn">
                    <div className="house ">
                        <FaHome />
                    </div>
                    <span className="">Math Quiz</span>
                </div>
                <div>
                </div>
            </div>
            <div className="terminal-bot">
                {/* Welcome message */}
                <p className="terminal-prompt last-login fadeIn delay-2">Hello Candidate! Ready for the Quiz?</p><br />
                <p className="terminal-prompt fadeIn delay-3"><span className="terminal-green">{d.getHours()}:{minutes} </span> welcome to the beginning of this examination math quiz.</p>
                <p className="terminal-prompt fadeIn delay-3_5"><span className="terminal-green">{d.getHours()}:{minutes} </span> Remember your have 5 minutes to solve the following questions.</p>
                <p className="terminal-prompt fadeIn delay-4"><span className="terminal-green">{d.getHours()}:{minutes} </span> This will will improve your ability to answer questions on time</p>
                <p className="terminal-prompt fadeIn delay-4_5"><span className="terminal-green">{d.getHours()}:{minutes}</span> You have exactly 10 questions.</p>
                {/* Welcome question */}
                <div className="mt-25 terminal-prompt terminal-text fadeIn delay-5">
                    <p className="terminal-green">{d.getHours()}:{minutes}</p>
                    <p className="typewriter pl-7">Are you ready?........ let's begin..</p>
                </div>
                {/* Start button */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="terminal-green fadeIn delay-10">{d.getHours()}:{minutes}</p>
                    <button onClick={() => { setGameState("quiz"); }} className="fadeIn delay-10_5 startBtn button-transition">Start</button>
                </div>
            </div>
        </div>
    </div>
};

export default Main;