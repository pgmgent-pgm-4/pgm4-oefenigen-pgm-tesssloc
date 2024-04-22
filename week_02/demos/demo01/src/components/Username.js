import React, {useState} from 'react'

export default function Username() {
    const [name, setName] = useState('')
    const handleChange = (e) => {
        setName(e.target.value)
    }
  return (
    <div>
        <div>{name}</div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={name} onChange={handleChange}></input>
    </div>
  )
}
