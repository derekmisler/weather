import { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { GlobalStyle } from 'styles'
import { useTheme } from 'utils/useTheme'

export const config = { amp: false }

export const App: NextPage<{}> = () => {
  const [theme] = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Header />
      <Footer />
    </ThemeProvider>
  )
}

export default App
