import { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Container } from 'components/Container'
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
      <Container></Container>
    </ThemeProvider>
  )
}
export default App
