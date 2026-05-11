import React, { useContext } from 'react'
import { QuizData } from '../App'
import { useNavigate } from 'react-router-dom'
import "./Result.css"
const Result = () => {

   const {name,score }=useContext(QuizData)
   const navigate= useNavigate()

  return (
    <div className='result-container'>

      <div className='result-box'>

        <h1>Quiz Completed !</h1>

        <h2>{name}, Your Score is {score} / 5 </h2>
        {score < 5 &&
        
        <button 
        onClick={() => navigate("/")} 
        className='next-btn'
        
        >
          Start Quiz Again </button>
        
        }
        

      </div>

    </div>
  )
}

export default Result