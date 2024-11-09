import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context';
const Sidebar = () => {
  const [extended,setExtended]=useState(false);
  const {onSent,prevPrompt,setRecentPrompt,newChat} =useContext(Context);

  return (
    <>
      <div className='sidebar'>
        <div className='top'>
        <img src={assets.menu_icon} className='menu' onClick={()=>{
          setExtended(prev=>!prev)
        }}/>
        <div className='newchat' onClick={()=>newChat()}>
            <img src={assets.plus_icon}/>
          {extended?<p>New Chat</p>:null} 
        </div>
        {extended?
        <div className='recent'>
        <p classname='recent-title'>Recent</p>
        {prevPrompt.map((item,index)=>{
          return (
            <div className='recent-entry'>
            <img src={assets.message_icon}/>
            <p>{item.slice(0,18)}...</p>
        </div>
          )
        })}
        
    </div>:null}
        
        </div>
        
        <div className='bottom'>
            <div className='bottom-icon recent-entry'>
                <img src={assets.question_icon}/>
             {extended?<p>Help</p>:null}   
            </div>
            <div className='bottom-icon recent-entry'>
                <img src={assets.history_icon}/>
             {extended?<p>Activity</p>:null} 
            </div>
            <div className='bottom-icon recent-entry'>
                <img src={assets.setting_icon}/>
             {extended?<p>Settings</p>:null}  
            </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
