import {createContext, useState} from 'react'

export const UserContext = createContext();

export default function UserArea({children}) {
    const [isLogedIn, setIsLogedIn] = useState(false)
  return (
    <UserContext.Provider value={[isLogedIn, setIsLogedIn]}>
        {children}
    </UserContext.Provider>
  )
}