import React from 'react'
import { Navbar } from './Navbar'

const headerCss: React.CSSProperties = {
  backgroundColor: '#f0f0f0',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '1rem',
}

export const Header = () => {
  return (
    <div style={headerCss}>
      <img src="/tg-icon-name.svg" alt="Logo" style={{ width: '250px', height: '250px' }} />
      <Navbar />
    </div>
  )
}
