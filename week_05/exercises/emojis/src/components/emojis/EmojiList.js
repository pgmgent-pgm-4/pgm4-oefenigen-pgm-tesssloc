import React from 'react'
import Emoji from './Emoji'

export default function EmojiList({data}) {
  return (
    <ul>
      {data.map((emoji, i) => {
        <li>
          <Emoji emoji={emoji} />
        </li>
      })}
    </ul>
  )
}