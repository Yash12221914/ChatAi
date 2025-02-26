import { useState } from 'react'
import axios from 'axios'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import apikey from './data/config';

function App() {
  const [question, setquestion] = useState("");
  const [answer,setanswer] = useState("");
  async function generate(){
    setanswer("loading...");
    const response = await axios({
      url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apikey}`,
      method:"post",
      data:{"contents": [{"parts":[{"text": question}]}]}
    })
      setanswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
  }

  return (
    <>
        <h1>Chat AI</h1>
        <input value={question} onChange={(e)=>{
          setquestion(e.target.value)
        }}></input>
        <button onClick={generate}>Generate answer</button>
        <div className='container'>
        <pre>{answer}</pre>
        </div>
    </>
  )
}

export default App
