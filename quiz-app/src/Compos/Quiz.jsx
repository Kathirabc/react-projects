import { useContext, useEffect, useRef, useState } from 'react'
import questions from "../assets/questions.json"
import { useNavigate } from 'react-router-dom'
import { QuizData } from '../App'
import "./Quiz.css"
const Quiz = () => {
    const navigate =useNavigate()
    const [crntQz,setCrntQz]=useState(0)
    const [optChosen ,setOptChosen]=useState("")
    const {name ,setScore}=useContext(QuizData)
    const nextBtnRef=useRef(null) ///initial should be entered 

 

    function finish(){
        if (optChosen == questions[crntQz].answer) {
            setScore((prev)=> prev + 1)
        }
        navigate("/result")
    }
    function next() {



        if(optChosen== questions[crntQz].answer ){
            setScore((prev)=>prev+1)
            
        }
        setCrntQz((crntQz)=>crntQz + 1)
        setOptChosen("") //after clicking next clears the optchosen var empty
    }
    return (
        <div className="quiz-container">

            <div className="quiz-box">

                <h1>Welcome to Quiz {name}!</h1>

                <h2>{questions[crntQz].prompt}</h2>

                <div className="options">

                    {
                        ["A", "B", "C", "D"].map((opt, index) => (

                            <button
                                key={index}
                                onClick={() => {
                                    const selected = `option${opt}`
                                    setOptChosen(selected)
                                }}
                            >
                                {questions[crntQz][`option${opt}`]}
                            </button>

                        ))
                    }

                </div>

                {
                    crntQz === questions.length - 1
                        ? (
                            <button
                                className="next-btn"
                                disabled={!optChosen}
                                onClick={finish}
                            >
                                Finish
                            </button>
                        )
                        : (
                            <button
                                ref={nextBtnRef}
                                className="next-btn"
                                disabled={!optChosen}
                                onClick={next}
                            >
                                Next
                            </button>
                        )
                }

            </div>

        </div>
    )
}

export default Quiz