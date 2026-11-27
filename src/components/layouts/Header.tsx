import React from 'react'
import { MyNavbar } from './MyNavbar'

const headerCss: React.CSSProperties = {
  
  padding: '0rem',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '1rem',
}

export const Header = () => {
  return (
    <div style={headerCss}>
      <MyNavbar />
      
    </div>
  )
}
