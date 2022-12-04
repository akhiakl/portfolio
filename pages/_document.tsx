import Document, { Html, Head, Main, NextScript } from 'next/document'
import LoadingScreen from '../components/pre-loader/LoadingScreen'

class AppDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="description" content="Portfolio website of Akhil" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
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
