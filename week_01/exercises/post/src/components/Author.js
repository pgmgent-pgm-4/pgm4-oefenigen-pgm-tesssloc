import React from 'react'

export default function Author({name, picture}) {
  return (
    <div>
        <p>{name}</p>
        <img src={picture} alt="efe"/>
    </div>
  )
}