import React, { useState } from 'react'
import UseEffect from './Effect/UseEffect';

const Counter = () => {
    const [count,setCount] = useState(0);
    const handleAdd = ()=>{
        setCount((preCount)=>preCount+1)
      }
      const handleRemove =()=>{
        setCount(preCount=>preCount-1)
      }
      //safe change
      // for(let i=0;i<10;i++){
      //     setCount((preCount=>{
      //         console.log(preCount); // 0 1 2 3 4 ... 9
      //         return preCount + 1
      //     }))
      // }
  
      //unsafe change
      // for (let i = 0; i < 10; i++) {
      //     console.log(count); // 0
      //     setCount(count+1)  
      // }
      return (
    <div>
        <p>{count}</p>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        <UseEffect/>
    </div>
  )
}

export default Counter