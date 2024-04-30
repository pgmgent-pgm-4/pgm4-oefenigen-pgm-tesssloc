import React from 'react'
import {useParams} from 'react-router-dom'

export default function Detail() {
    const { studentId } = useParams()
  return (
    <div>Detail: {studentId}</div>
  )
}
