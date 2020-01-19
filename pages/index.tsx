import { useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Container } from 'components/Container'
import { Row, Col } from 'components/Grid'
import { Heading, Text, Span, Link } from 'components/Typography'
import { GlobalStyle } from 'styles'
import { RootState } from 'utils/reducers'
import { useTheme } from 'utils/useTheme'
import { LocationAutocomplete } from 'components/Forms'
import { resetPlaces } from 'utils/actions'

export const config = { amp: false }

export const App: NextPage<{}> = memo(() => {
  const { selection } = useSelector((state: RootState) => state.places)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetPlaces())
  }, [])
  useEffect(() => {
    if (selection && selection.lat && selection.lng) {
      console.log('--------------------')
      console.log('selection', selection)
      console.log('--------------------')
      router.push({ pathname: '/location', query: { ...selection } })
    }
  }, [selection])

  const [theme] = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Header />
      <Container>
        <Row vAlign='center' columnsDesktop={11}>
          <Col rangeDesktop={5}>
            <LocationAutocomplete />
          </Col>
          <Col rangeDesktop={1}>
            <Text textAlign='center' italic>or</Text>
          </Col>
          <Col rangeDesktop={5}>
            <Link>
              <Heading level={2}>use current</Heading>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </ThemeProvider>
  )
})
export default App
