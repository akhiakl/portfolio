import Document, { Html, Head, Main, NextScript } from "next/document";
import LoadingScreen from "../components/pre-loader/LoadingScreen";

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Portfolio website of Akhil" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"
          />
        </Head>
        <body className="overflow-hidden">
          <LoadingScreen />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default AppDocument;
