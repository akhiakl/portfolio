import Document, { Html, Head, Main, NextScript } from 'next/document'
import LoadingScreen from '../components/pre-loader/LoadingScreen'

class AppDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="description" content="Portfolio website of Akhil" />
        </Head>
        <body className="overflow-hidden">
          <LoadingScreen />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default AppDocument
