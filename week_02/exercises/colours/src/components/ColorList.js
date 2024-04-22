import React, {useState} from 'react'

export default function ColorList() {
    const [colour, setColour] = useState(['red', 'green'])
    const handleAddColour = (e) => {
        setColour(colour.push(e.target.value))
    }
  return (
    <div>
        <ul>
            {colour.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        <input id="color" type="text" onChange={handleAddColour}></input>
    </div>
  )
}