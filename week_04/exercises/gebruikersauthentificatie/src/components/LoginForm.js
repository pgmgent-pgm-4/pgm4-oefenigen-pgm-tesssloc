import React from 'react'

export default function LoginForm() {
  return (
    <div>
        <form className="auth-form">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter username" name="username"></input>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter password" name="password"></input>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
