import React from 'react'
import Course from './Course'

export default function Student({students}) {
  return (
    <div>
        <ul>
            {students.map((item, index) => (
                <li key={`student${index}`}>
                    <h2>{item.firstName} {item.lastName}</h2>
                    <p>{item.genderCode === 1 ? 'male' :
                        item.genderCode === 2 ? 'female' : 'non-binary'}</p>
                    <p>{item.birthYear}</p>
                    <Course courses={item.courses}/>
                </li>
            ))}
        </ul>
    </div>
  )
}