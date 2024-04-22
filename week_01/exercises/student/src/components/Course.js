import React from 'react'

export default function Course({courses}) {
  return (
    <div>
        <ul>
        {courses.map((item, index) => (
                <li key={`course_${index}`}>
                    <h3>{item.name}</h3>
                    <ul>
                        {item.instructors.map((item, index) => (
                            <li key={`instructor_${index}`}>{item}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </div>
  )
}