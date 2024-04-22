import React from 'react'
import MovieCard from './MovieCard'
import './movies.css'

export default function MovieList({movies}) {
  return (
    <div className="list">
        {movies.map((movie, index) => (
            <MovieCard movie={movie} key={`key-${index}`}/>
        ))}
    </div>
  )
}