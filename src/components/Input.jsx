import React from 'react'
import { useEffect } from 'react';
import { useRef,useState } from 'react'
import CompoOne from './CompoOne';
import UseEffect from './Effect/UseEffect';

const Input = () => {
    // const inputRef = useRef();
    const [text,setText]=useState("");
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const click =()=>{
        // console.log(inputRef.current.value);
        console.log(text);
    }

  return (
    <div>
        {/* <input type="text" value={text} onChange={handleChange}/>
        <button onClick={click}>Click</button>
        <CompoOne></CompoOne> */}
        {/* <UseEffect/> */}
    </div>
  )
}

export default Input