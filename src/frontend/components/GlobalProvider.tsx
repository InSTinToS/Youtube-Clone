import store from 'frontend/store'
import theme from 'frontend/styles/theme'
import GlobalStyle from 'frontend/styles'

import { ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: ReactNode
}

const GlobalProvider = ({ children }: Props) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default GlobalProvider
