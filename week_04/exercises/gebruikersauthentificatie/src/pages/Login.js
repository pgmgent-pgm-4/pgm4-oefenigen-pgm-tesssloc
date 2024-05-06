import React from 'react'
import LoginForm from '../components/LoginForm'
import {useSearchParams} from 'react-router-dom'

export default function Login() {
  const [searchParams] = useSearchParams()
  const username = searchParams.get('username')
  console.log(username);
  return (
    <div>
        <LoginForm />
    </div>
  )
}