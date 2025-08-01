import { montserrat, openSans } from "../public/font.js"
import Providers from "@/components/Providers/Providers.js";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  other: {
    'msvalidate.01': process.env.NEXT_MS_VALIDATE
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_GOOGLE_GTAG && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GOOGLE_GTAG}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_GOOGLE_GTAG}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
