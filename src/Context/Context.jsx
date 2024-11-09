import { createContext, useState } from "react";
import run from "../config/gemini";
export const Context = createContext();
const ContextProvider=(props)=>{
    const [input,setInput]=useState("");//use to save the input data
    const [recentprompt,setRecentPrompt]=useState("");//when we click on send button using this state we will display the input on screen to users 
    const [prevPrompt,setprevPrompt]=useState([]);//to store all the previous prompts and we will display this information in recent tab on screen 
    const [showResult,setshowResult]=useState(false);//this state will hide the suggestion boxes present on screen so that result can be displayed on screen
    const [loading,setLoading]=useState(false);//if this state variable is true it will display the loading animation and once data is fecthed it become ffalse and display data on screen 
    const [resultData,setresultData]=useState("");//display result on webpage

    const delayPara=(index,nextWord)=>{
     setTimeout(function (){
       setresultData(prev=>prev+nextWord)
     },75*index)
    }
    const newChat=()=>{
        setLoading(false)
        setshowResult(false)
    }
     
    const onSent= async (prompt) =>{
    setresultData("")
    setLoading(true)
    setshowResult(true)
    setRecentPrompt(input)
    setprevPrompt(prev=>[...prev,input])
    const response = await run(input)
    let responeArray = response.split("**")
    let newResponse="";
    for(let i=0;i< responeArray.length;i++){
    if(i===0 || i%2!=1){
       newResponse+=responeArray[i]
    }
    else{
        newResponse+="<b>"+responeArray[i]+"</b>";
    }
    }
    let newResponse2=newResponse.split("*").join("</br>")
    let newResponseArray=newResponse2.split(" ");
    for(let i=0;i<newResponseArray.length;i++){
    const nextWord=newResponseArray[i];
    delayPara(i,nextWord+" ")
    }
    setLoading(false)
    setInput("")
    }
     
    const contextValue={
     prevPrompt,
     setprevPrompt,
     onSent,
     recentprompt,
     setRecentPrompt,
     showResult,
     setshowResult,
     loading,
     setLoading,
     resultData,
     setresultData,
     input,
     setInput,
     newChat
    }
    return (
        <Context.Provider value={contextValue}> 
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider
