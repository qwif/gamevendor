import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" href="/fonts/inter-regular.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-medium.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-semibold.ttf" as="font" crossOrigin="anonymous" />
        <link href="/favicon.ico" rel="shortcut icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
