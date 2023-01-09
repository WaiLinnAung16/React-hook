import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import UnMounted from './UnMounted';

const UseEffect = () => {
  const [toggle,setToggle] = useState(true)
  const handleToggle = () =>{
    setToggle(pre=>!pre)
  }
  //mounted
  useEffect(()=>{
    console.log("mounted");
  },[]);

  //updated and specific update
  useEffect(()=>{
    console.log("updated");
  });
  useEffect(()=>{
    console.log("updated toggle")
  },[toggle]);


  return (
    <div>
      {
        toggle && <h1>Hello</h1>
      }
      <button onClick={handleToggle}>Toggle</button>
      {
        toggle && <UnMounted/>
      }
      
    </div>
  )
}

export default UseEffect