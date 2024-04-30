import React, { useEffect, useState } from 'react'
import { ROUTES } from '../routes/routes';
import { Link } from 'react-router-dom';

export default function Blog() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setPosts([]);
        fetch('https://dummyjson.com/posts').then(response => response.json()).then((data) => setPosts(data.posts))
    }, [])
  return (
    <div>
        {posts.map((post, index) => (
            <Link to={`${ROUTES.blog.path}/${post.id}`}>
                <p key={`post-${post.id}`}>{post.title}</p>
            </Link>
        ))}
    </div>
  )
}