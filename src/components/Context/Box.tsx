import React from 'react'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'


const Box = () =>
{
        const theme = useContext(ThemeContext)  
  return (
    <div style={{ backgroundColor: theme.secondary.main, color: theme.primary.text }}>Theme Context</div>
  )
}

export default Box