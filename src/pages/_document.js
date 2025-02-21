import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Venmail</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Venmail Management Inc" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/manifest" />
        <meta name="application-name" content="beta.venmail.io" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#FF5C39" />
        <meta name="apple-mobile-web-app-title" content="venmail" />
        <meta property="og:url" content="https://beta.venmail.io" />
        <meta property="og:site_name" content="Venmail" />
        <meta property="og:title" content="AI-Powered Email for Businesses" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#FF5C39" />
        <meta name="google" content="nopagereadaloud" />
        <meta content="telephone=no" name="format-detection" />
        <meta name="renderer" content="webkit" />
        <meta name="keywords" content="venmail, mail email, gmail, mailbox" />
        <meta property="og:image" content="/favicon-32x32.png" />
        <meta property="og:image:type" content="image/png" />
        <title>Venmail</title>
      </Head>
      <body className="antialiased" >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
