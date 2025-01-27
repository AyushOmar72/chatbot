import React, { createContext, useState } from 'react'
import run from '../gemini'
export const dataContext =createContext()

function UserContext({children}) {
const [input,setInput]=useState("")
const[showResult,setShowResult]=useState(false)
const[loading,setLoading]=useState(false)
const[resultData,setResultData]=useState("")
const[recentPrompt,setRecentPrompt]=useState()
   async function sent(input){
    setResultData("")
    setShowResult(true)
    setRecentPrompt(input)
    setLoading(true)

    let response= await run(input)
    setResultData(response)
    setLoading(false)
    setInput("")
    }
    const data={
    input,
    setInput,
    sent,
    loading,
    setLoading,
    showResult,
    setShowResult,
    resultData,
    setResultData,    
    recentPrompt,
    setRecentPrompt,

    }
    
  return (
    <>
    <dataContext.Provider value={data}>
    {children}
    </dataContext.Provider>

      
    </>
  )
}

export default UserContext
