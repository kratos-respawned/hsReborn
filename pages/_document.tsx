import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" title="hello world">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
