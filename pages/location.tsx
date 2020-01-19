import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { Footer } from 'components/Footer'
import { Container } from 'components/Container'
import { GlobalStyle } from 'styles'
import { useTheme } from 'utils/useTheme'

export const config = { amp: false }

export const LatLong: NextPage<{}> = () => {
  const [theme] = useTheme()
  const router = useRouter()
  useEffect(() => {
    console.log('--------------------')
    console.log('router.query', router.query)
    console.log('--------------------')
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Container></Container>
      <Footer />
    </ThemeProvider>
  )
}
export default LatLong
