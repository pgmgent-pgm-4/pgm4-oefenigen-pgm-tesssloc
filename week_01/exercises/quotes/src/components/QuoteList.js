import React from 'react'
import QuoteListItem from './QuoteListItem'

export default function QuoteList({quotes}) {
  return (
    <div>
        <ul>
        {quotes.map((item, index) => (
          <li key={`quote_${index}`}><QuoteListItem content={item.content} cite={item.cite}/></li>
        ))}
      </ul>
    </div>
  )
}