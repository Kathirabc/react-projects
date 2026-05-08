
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import User from './Compos/User'
import Quiz from './Compos/Quiz'
import Result from './Compos/Result'
import { createContext, useState } from 'react'

export const QuizData = createContext()
function App() {

  const [name, setName] = useState("")
  const [score, setScore] = useState(0)
  const [userPer, setUserPer] = useState(false)

  return (
    <>
      <BrowserRouter>

        <QuizData.Provider value={{ name, setName, score, setScore, setUserPer }}>
          <Routes>
            <Route path='/' element={<User />} />
            <Route path='/quiz' element={
             userPer ?  <Quiz />
             : <Navigate to="/"/>
              } />
            <Route path='/result' element={<Result />} />
          </Routes>
        </QuizData.Provider>
      </BrowserRouter>

    </>
  )
}

export default App
