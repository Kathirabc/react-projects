import React, { useContext, useEffect, useRef } from 'react'
import { QuizData } from '../App'
import { useNavigate } from 'react-router-dom'
import "./User.css"
const User = () => {

    const{setName,name,setUserPer,userPer}=useContext(QuizData)
    const navigate=useNavigate()
     const userRef=useRef()
     useEffect(()=>{
      userRef.current.focus()
      console.log(userRef.current.style.color="red");
      

     },[])
  return (
    <>
    <div className='div'>
    <input 
    ref={userRef}
    type="text" 
    placeholder='Enter ur name....'
    onChange={(e) => {

            const formatted = e.target.value
              .split(" ")
              .map(word =>
                word.charAt(0).toUpperCase() +
                word.slice(1).toLowerCase()
              )
              .join(" ")

            setName(formatted)
          }}
    />
    <button className='btn' onClick={()=> {
        if(name==""){
            console.log("nothing");
            
            navigate("/")
        }else{
          setUserPer(true)

          navigate("/quiz")
        }
        
        }}>Start Quiz</button>
      </div>
    </>
  )
}

export default User