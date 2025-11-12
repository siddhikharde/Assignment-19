import React from 'react'
import "./emoji-btn.css";

function EmojiButtons({ emoji, setEmoji }) {
  return (
    <div
      className='emoji-option'
      onClick={() => {
        setEmoji(emoji)
      }}
    >
     <span>{emoji}</span>
    </div>
  )
}

export default EmojiButtons;
