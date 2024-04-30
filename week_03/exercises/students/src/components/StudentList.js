import React, { useEffect, useState } from 'react'
import Student from './Student'

export default function StudentList({students}) {
  return (
    <ul>
        {students.map((student, i) => (
            <Student key={`studeent-${i}`} student={student} />
        ))}
    </ul>
  )
}