import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function LoginForm() {
  const {password, setPassword, username, setUsername} = useContext(UserContext)
  return (
    <div>
        <form className="auth-form">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter username" name="username" value={username} onChange={(e) => {
              setUsername(e.target.value)
            }}></input>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter password" name="password" value={password} onChange={(e) => {
              setPassword(e.target.value)
            }}></input>
            <button type="submit">Login</button>
            {console.log(username,password)}
        </form>
    </div>
  )
}