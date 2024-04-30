import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes/routes'

export default function Navigation() {
  return (
    <ul>
        <li><NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink></li>
        <li><NavLink to={ROUTES.detail.path}>{ROUTES.detail.title}</NavLink></li>
    </ul>
  )
}