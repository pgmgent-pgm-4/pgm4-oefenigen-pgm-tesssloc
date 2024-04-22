import React from 'react'

export default function Person({firstName, lastName, pictureUrl, age, length, weight}) {
  return (
    <div>
        <h2>{firstName} {lastName}</h2>
        <img src={pictureUrl} />
        <p>Age: {age}</p>
        <p>Weight: {weight}</p>
        <p>Length: {length}</p>
        <p>BMI: {weight / (length * length)}</p>
    </div>
  )
}
