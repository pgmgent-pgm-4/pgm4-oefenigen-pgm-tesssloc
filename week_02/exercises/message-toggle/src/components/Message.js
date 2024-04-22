import React, { useState } from 'react'

export default function Message({message}) {
    const [toggle, setToggle] = useState(true);
    const handleClickShow = () => {
        setToggle(!toggle)
    }
  return (
    <div>
        <button onClick={handleClickShow}>Show/hide message</button>
        {toggle && <p>{message}</p>}
    </div>
  )
}