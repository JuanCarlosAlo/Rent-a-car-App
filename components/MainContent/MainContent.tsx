import React from 'react'
import { StyledMainContent } from './styles'

const MainContent = ({children}: {children: any}) => {
  return (
    <StyledMainContent>{children}</StyledMainContent>
  )
}

export default MainContent