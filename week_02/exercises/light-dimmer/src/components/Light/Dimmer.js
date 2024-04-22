import React from 'react'

export default function ({dimPercentage, setDimPercentage}) {
  const handleChangeRange = (event) => {
    setDimPercentage(event.target.value)
  }
  return (
    <div>
      <input type="range" min="0" max="100" step="1" id="dimmer" value={dimPercentage} onChange={handleChangeRange}/>
      <label htmlFor='dimmer'></label>
    </div>
  )
}