import "./color-btn.css";
function ColorButtons({ color, setColor }) {
  return (
    <div
      className='color-option'
      onClick={() => {
        setColor(color)

      }}
      style={{backgroundColor:`${color}`}}
    >  
    </div>
  )
}

export default ColorButtons;