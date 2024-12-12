import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Venmail</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Venmail Management Inc" />
        
        {/* <meta property="og:type" content="website" />
        <meta property="og:title" content="Your Site Title" />
        <meta property="og:description" content="Your site description here" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Site Title" />
        <meta name="twitter:description" content="Your site description here" />
        <meta name="twitter:image" content="https://yourdomain.com/twitter-image.jpg" /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
