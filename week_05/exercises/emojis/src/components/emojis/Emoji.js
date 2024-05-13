import React from 'react'

export default function Emoji({emoji}) {
  return (
    <div>
      <div>{emoji.symbol}</div>
      <p>{emoji.title}</p>
    </div>
  )
}
