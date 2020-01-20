import { memo } from 'react'
import { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { Favorites } from 'components/molecules/Favorites'
import { Container } from 'components/atoms/Container'
import { GlobalStyle } from 'styles'
import { useTheme } from 'utils/useTheme'
import { resetPlaces } from 'utils/actions'
import { Search } from 'components/organisms/Search'
import { Weather } from 'components/organisms/Weather'

export const config = { amp: false }

export const App: NextPage<{}> = memo(() => {
  const [theme] = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Container>
        <Search />
        <Weather />
      </Container>
      <Favorites />
    </ThemeProvider>
  )
})
export default App
