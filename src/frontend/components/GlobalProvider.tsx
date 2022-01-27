import theme from 'frontend/styles/theme'
import GlobalStyle from 'frontend/styles'

import store from 'frontend/store'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: ReactNode
}

const GlobalProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {children}
      </ThemeProvider>
    </Provider>
  )
}

export default GlobalProvider
