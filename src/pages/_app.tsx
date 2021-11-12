import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Project Quiz - Next.JS</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="Uma simples aplicação com Next.JS"
      />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App
