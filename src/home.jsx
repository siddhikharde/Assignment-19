import React, { useState } from 'react'
import "./home.css"
import EmojiButtons from './emoji-btn.jsx';
import ColorButtons from './color-btn.jsx';
import './color-btn.css';
function Home() {
    const [emoji, setEmoji]=useState("😊");
    const [range, setRange]=useState(50);
    const [angle , setAngle]=useState(0);
    const [color, setColor]=useState("#FFFF")
  return (
    <div className='home-con'>
        <div className='emoji-con'style={
       { fontSize:`${range}px`,
   
    backgroundColor:`${color}`
     }

        }>
          <span style={{ transform:`rotate(${angle}deg)`,}}>{emoji}</span>
        </div>
        <div className='emojiPicker'>
            <EmojiButtons emoji={"😂"} setEmoji={setEmoji}/>
            <EmojiButtons emoji={"🤣"} setEmoji={setEmoji}/>
            <EmojiButtons emoji={"💕"} setEmoji={setEmoji}/>
            <EmojiButtons emoji={"❤"} setEmoji={setEmoji}/>
        </div>
        <div className='range-con'>
            <input type="range" max="100" min="0" className='slider'
            onChange={(e)=>{
                setRange(e.target.value);
            }} />
            
        </div>
      
            <div className='rotate' onClick={
            ()=>{
                setAngle(angle+45);
            }
        }>
         <div className='rotate-btn'>Rotate</div>
        </div>
        <div className='color-picker'>
            <ColorButtons color={"#66ff66"} setColor={setColor}/>   
            <ColorButtons color={" #ff6666"} setColor={setColor}/>
            <ColorButtons color={"#ff884d"} setColor={setColor}/>
            <ColorButtons color={"#66b3ff"} setColor={setColor}/>
            <ColorButtons color={"#9966ff"} setColor={setColor}/>
            <ColorButtons color={"#ffff66"} setColor={setColor}/>
            <ColorButtons color={"#ff66b3"} setColor={setColor}/>
            <ColorButtons color={"#cccccc"} setColor={setColor}/>
        </div>
    </div>

  )
}

export default Home;
