import React from 'react'

export default function SelectCountry({countries, setCountry, country}) {
  const handleChange = (e) => {
    setCountry(e.target.value)
  }
  return (
    <select value={country} onChange={handleChange}>
      {countries.map((country, index) => (<option key={`country-${index}`} value={country.value}>{country.name}</option>))}
    </select>
  )
}