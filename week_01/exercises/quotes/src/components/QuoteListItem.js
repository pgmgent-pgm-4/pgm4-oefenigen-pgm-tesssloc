import React from 'react'

export default function QuoteListItem({content, cite}) {
  return (
    <div>
        <p>{content}</p>
        <p>{cite}</p>
    </div>
  )
}
