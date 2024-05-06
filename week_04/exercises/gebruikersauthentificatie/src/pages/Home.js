import React, { useContext } from 'react'
import Welcome from '../components/Welcome'
import UserContext from '../context/UserContext'
import Error from './Error'

export default function Home() {
  const [isLogedIn, setIsLogedIn] = useContext(UserContext)
  return ( 
    <div>

    {isLogedIn ? (
      <Welcome />
    ) :
      <Error />}
      
    </div>
  )
}
