import React, {useState} from 'react'
import Color from './Color'

export default function ColorList() {
    const [listColors, setListColors] = useState(['rgb(10,30,55)', 'rgb(10,40,55)', 'rgb(30,30,55)'])
    const generateRandomColor = () => {
        return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
    }
  return (
    <div>
        {listColors.map((color) => (<Color color={color}/>))}
    </div>
  )
}