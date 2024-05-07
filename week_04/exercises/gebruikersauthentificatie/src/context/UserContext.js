import {createContext, useState} from 'react'

export const UserContext = createContext();

export default function UserArea({children}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogedIn, setIsLogedIn] = useState(false);
    const login = () => {
      if (password === 'secret' && username === 'user') {
        setIsLogedIn(true)
      } else {
        setIsLogedIn(false)
      }
    }
    const logout = () => {
      setIsLogedIn(false)
    }
  return (
    <UserContext.Provider value={{isLogedIn, setIsLogedIn, username, setUsername, password, setPassword, login, logout}}>
        {children}
    </UserContext.Provider>
  )
}