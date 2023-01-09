import { useState } from "react"
import CompoTwo from "./CompoTwo"
import './One.css'
const CompoOne = () => {
    const [toggle,setToggle] = useState(true)
    const handleClick = ()=>{
        setToggle(pre=>!pre)
    }
  return (
    <div>
        <h1 className={toggle?'red':'blue'}>Hello World</h1>  {/* conditional styling */}
        {
          toggle && <CompoTwo/>
        }
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default CompoOne