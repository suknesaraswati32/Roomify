import { useState } from "react"
export default function Like(){
  let[isLike,setIsLike]=useState(false)
  const isLiked=()=>{
    setIsLike(!isLike)
  }
  return(
    <>
     <span onClick={isLiked} style={{ color: isLike ? "red" : "black",fontSize:'21px' }}>
      <i className={isLike ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
    </span>
   </>

  )
}