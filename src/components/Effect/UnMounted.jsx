import { useEffect } from "react"

const UnMounted = () => {
    useEffect(()=>{
        console.log("Mounted Two");
        return ()=>{
            console.log("Unmounted");
        }
    },[])
  return (
    <div>UnMounted</div>
  )
}

export default UnMounted