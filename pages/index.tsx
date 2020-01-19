import { memo } from 'react'
import { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { Header } from 'components/molecules/Header'
import { Footer } from 'components/molecules/Footer'
import { Container } from 'components/atoms/Container'
import { GlobalStyle } from 'styles'
import { useTheme } from 'utils/useTheme'
import { resetPlaces } from 'utils/actions'
import { Search } from 'components/organisms/Search'

export const config = { amp: false }

export const App: NextPage<{}> = memo(() => {
  const [theme] = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Header />
      <Container>
        <Search />
      </Container>
      <Footer />
    </ThemeProvider>
  )
})
export default App
