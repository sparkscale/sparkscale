import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spark&Scale - Moderne Webagentur für ambitionierte Unternehmen",
  description: "Mehr Sichtbarkeit. Mehr Leads. Mehr Wachstum. Technisch exzellent. SEO/GEO-smart. Zukunftssicher.",
  icons: {
    icon: '/Spark&Scale (1).png',
    shortcut: '/Spark&Scale (1).png',
    apple: '/Spark&Scale (1).png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        ) : null}
        
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID ? (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
      ) : null}

      {/* Hotjar Tracking */}
      {process.env.NEXT_PUBLIC_HOTJAR_ID ? (
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      ) : null}

      {/* HubSpot Tracking Code */}
      <Script id="hubspot-tracking" strategy="afterInteractive">
        {`
          (function(h,u,b,s,p,o,t){
            h.hsq=h.hsq||[];
            s=u.createElement("script");s.async=true;
            s.src="//js.hs-scripts.com/146697731.js";
            u.getElementsByTagName("head")[0].appendChild(s);
          })(window,document);
        `}
      </Script>
      </head>
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        {process.env.NEXT_PUBLIC_GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        ) : null}
        
        {children}
        <CookieBanner />
        <WebVitalsReporter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}



