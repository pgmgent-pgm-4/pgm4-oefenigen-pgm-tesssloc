import React from 'react'

export default function Project({title, date, content}) {
  return (
    <ul>
        <li>{title}</li>
        <li>{date}</li>
        <li>{content}</li>
    </ul>
  )
}