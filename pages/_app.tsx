import React from 'react'
import App, { AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import withRedux from 'next-redux-wrapper'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { meta } from 'constants/meta'
import { configureStore } from 'utils/configureStore'
import { GlobalStyle } from 'styles'
import { Header } from 'components/molecules/Header'

interface AppProps {
  store: Store
}

class MainApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    }
  }
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <>
        <Head>
          <title>{meta.title}</title>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='description' content={meta.description} />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
          <link rel='shortcut icon' href='favicon.ico' />
          <link
            href='https://fonts.googleapis.com/css?family=Lato:400,400i,900|Playfair+Display:600i&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Provider store={store}>
          <PersistGate persistor={(store as any).__persistor} loading={<Header title='Whatever the Weather'/>}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </>
    )
  }
}
export default withRedux(configureStore)(MainApp)
