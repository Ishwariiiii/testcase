import React, { useState } from 'react'

const Test = () => {
    const [data,setData]=useState("")
  return (
    <div>
        {/* <h1>Button test case</h1> */}
        <button data-testid="btn1" onClick={()=>setData("update dataa")}>Save</button>
        <h1>{data}</h1>
    </div>
  )
}

export default Test