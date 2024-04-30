import React from 'react'
import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Blogpost() {
    const {postId} = useParams()
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${postId}`).then(response => response.json()).then((data) => setPost(data))
    }, [])
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}
