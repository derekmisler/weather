import { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { Footer } from 'components/Footer'
import { Container } from 'components/Container'
import { GlobalStyle } from 'styles'
import { useTheme } from 'utils/useTheme'

export const config = { amp: false }

export const LatLong: NextPage<{}> = () => {
  const [theme] = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Container></Container>
      <Footer />
    </ThemeProvider>
  )
}
export default LatLong
