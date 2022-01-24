import theme from 'frontend/styles/theme'
import GlobalStyle from 'frontend/styles'

import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: ReactNode
}

const GlobalProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {children}
    </ThemeProvider>
  )
}

export default GlobalProvider
