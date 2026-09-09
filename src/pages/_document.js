import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="VenMail LLC" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/app-manifest.json" />
        
        {/* Application Meta */}
        <meta name="application-name" content="VenMail" />
        <meta name="apple-mobile-web-app-title" content="VenMail" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#ea580c" />
        
        {/* Viewport and Mobile */}
        <meta content="telephone=no" name="format-detection" />
        
        {/* Theme and Colors */}
        <meta name="theme-color" content="#ea580c" />
        <meta name="msapplication-TileColor" content="#ea580c" />
        
        {/* Page SEO is supplied by SeoDefaults through next/head. */}
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
              "name": "VenMail",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web"
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        {/* <script src="/register-sw.js" async /> */}
      </body>
    </Html>
  );
}
