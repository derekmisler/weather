import React from 'react'
import { NextPage, NextPageContext } from 'next'
import { ThemeProvider } from 'styled-components'
import { Header } from 'components/molecules/Header'
import { GlobalStyle } from 'styles'
import { useTheme } from 'utils/useTheme'

interface ErrorProps {
  statusCode: string
}
interface ErrorTypes extends NextPageContext {}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  const [theme] = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Header title={statusCode || 'This page doesn\'t exist!'} />
    </ThemeProvider>
  )
}

Error.getInitialProps = ({ res, err }: ErrorTypes) => {
  const { statusCode: resStatusCode } = res || {}
  const { statusCode: errStatusCode } = err || {}
  const statusCode = (resStatusCode || errStatusCode || '').toString()
  return { statusCode }
}

export default Error
