import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
const Main = () => {
  const {prevPrompt,setprevPrompt,onSent,recentprompt,setRecentPrompt,showResult,setshowResult,loading,setLoading,resultData,setresultData,input,
    setInput} = useContext(Context);
  return (
    <>
     <div className='main'>
      <div className='nav'>
     <p>QuickChat</p>
     <img src={assets.user_icon}/>
      </div>
      <div className='main-container'>
        {!showResult?<>
          <div className='greet'>
          <p><span>Hello, Vani</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className='cards'>
          <div className='card'>
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon}/>
          </div>
          <div className='card'>
            <p>Briefly summarize this conecpt</p>
            <img src={assets.bulb_icon}/>
          </div>
          <div className='card'>
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon}/>
          </div>
          <div className='card'>
            <p>Improve the readability of the folowing code</p>
            <img src={assets.code_icon}/>
          </div>
        </div></>
        : <div className='result'>
          <div className='result-title'>
            <img src={assets.user_icon}/>
            <p>{recentprompt}</p>
          </div>
          <div className='result-data'>
            <img src={assets.gemini_icon}/>
            {loading?
            <div className='loader'>
              <hr/>
              <hr/>
              <hr/>
            </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p> }
            {/* if we don't use dangerouslysetInnerHTML then it will display all the tags present in resultData
            we use this to simply display all tags as html tag */}
          </div>
          </div>}
       
        <div className='main-bottom'>
          <div className='search-box'>
            <input type='text' placeholder='Enter a prompt here' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <div>
              <img src={assets.gallery_icon}/>
              <img src={assets.mic_icon}/>
              <img src={assets.send_icon} onClick={()=>onSent()}/>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Main
