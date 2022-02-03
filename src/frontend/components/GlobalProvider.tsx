import theme from 'frontend/styles/theme'
import GlobalStyle from 'frontend/styles'

import client from 'frontend/services/apollo-client'

import store from 'frontend/store'

import { ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: ReactNode
}

const GlobalProvider = ({ children }: Props) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          {children}
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  )
}

export default GlobalProvider
