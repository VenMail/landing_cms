import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Venmail Management Inc" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/app-manifest.json" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://beta.venmail.io" />
        
        {/* Application Meta */}
        <meta name="application-name" content="Venmail" />
        <meta name="apple-mobile-web-app-title" content="Venmail" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#ea580c" />
        
        {/* Viewport and Mobile */}
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui" />
        <meta content="telephone=no" name="format-detection" />
        
        {/* Theme and Colors */}
        <meta name="theme-color" content="#ea580c" />
        <meta name="msapplication-TileColor" content="#ea580c" />
        
        {/* SEO Meta */}
        <meta name="description" content="AI-powered email management platform for efficient communication" />
        <meta name="keywords" content="venmail, email, gmail, mailbox, AI email, business email" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Venmail - AI-Powered Email Management" />
        <meta property="og:description" content="AI-powered email management platform for efficient communication" />
        <meta property="og:site_name" content="Venmail" />
        <meta property="og:url" content="https://venmail.io" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        
        {/* Additional Meta */}
        <meta name="google" content="nopagereadaloud" />
        <meta name="renderer" content="webkit" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Venmail",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <script src="/register-sw.js" async />
      </body>
    </Html>
  );
}
