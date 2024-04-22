import React from 'react'
import Author from './Author'

export default function Post({title, synopsis, story, publishDate, author}) {
  return (
    <div>
        <h1>{title}</h1>
        <p>{synopsis}</p>
        <p>{story}</p>
        <p>{publishDate}</p>
        <Author name={author.name} picture={author.picture}/>
    </div>
  )
}
