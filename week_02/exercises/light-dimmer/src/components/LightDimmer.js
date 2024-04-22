import React, {useState} from 'react'
import Light from './Light/Light'
import Dimmer from './Light/Dimmer'

export default function LightDimmer() {
    const [dimPercentage, setDimPercentage] = useState(100)
  return (
    <div>
        <Light dimPercentage={dimPercentage}/>
        <Dimmer dimPercentage={dimPercentage} setDimPercentage={setDimPercentage}/>
    </div>
  )
}
