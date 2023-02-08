import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="robots" content="index, follow" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
