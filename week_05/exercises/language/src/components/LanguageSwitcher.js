import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export default function LanguageSwitcher() {
    const [language, setLanguage] = useContext(LanguageContext)
    const handleClick = (language) => {
        setLanguage(language)
    }
    const greetings = {
        English: 'Hello',
        Russian: 'Privjet',
        Dutch: 'Hallo'
    }
  return (
    <div>
        <button onClick={() => handleClick('English')}>English</button>
        <button onClick={() => handleClick('Russian')}>Russian</button>
        <button onClick={() => handleClick('Dutch')}>Dutch</button>

        
        <div>{greetings[language]}</div>       
    </div>
  )
}
