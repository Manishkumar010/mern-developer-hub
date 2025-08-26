import Script from "next/script";
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1KRDR061H3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1KRDR061H3');
        `}
      </Script>

      <Component {...pageProps} />
       <Analytics /> {/* Vercel Analytics Tracking */}
    </>
  );
}
