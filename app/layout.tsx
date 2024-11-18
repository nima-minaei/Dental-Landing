import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import Head from "next/head";

const Family = localFont({
  src: "../public/fonts/Family/IRAN(FaNum).woff"
})

export const metadata: Metadata = {
  title: "دندان پزشکی دکتر سعید دریس",
  description: "کلینیک دندانپزشکی دکتر سعید دریس در مشهد - برای اطلاعات بیشتر وارد شوید.",
  verification: {
    google: 'aMayqU3H6AfwycrPyyof_SuvJz0wgSHW5RQGVAL2CbY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "دکتر سعید دریس دندانپزشکی مشهد",
    "url": "https://www.drderis.ir",
    "logo": "./app/src/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-915-514-0975",
      "contactType": "دندانپزشکی",
      "areaServed": "fa_IR",
      "availableLanguage": "فارسی"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "مشهد - خیابان فلسطین 19 - پلاک 76 - طبفه دوم",
      "addressLocality": "مشهد",
      "addressRegion": "مشهد",
      "postalCode": " ",
      "addressCountry": "fa_IR"
    },
    "sameAs": [
      "https://www.facebook.com",
      "https://www.twitter.com",
      "https://www.instagram.com/dr.saeid.deris/profilecard/?igsh=MWlvcDQ2NHJseW9vbg=="
    ]
  };

  return (
    <html lang="en" className="!scroll-smooth">

<Head>
        <title>دکتر سعید دریس دندانپزشکی مشهد</title>
        <meta name="description" content="وب سایت دکتر سعید دریس دندانپزشکی مشهد" />
        <meta name="google-site-verification" content="" />
        <meta property="og:title" content="دکتر سعید دریس دندانپزشکی مشهد<" />
        <meta property="og:description" content="کلینیک دندانپزشکی دکتر سعید دریس در مشهد - برای اطلاعات بیشتر وارد شوید." />
        <meta property="og:image" content="./app/src/IMG_0751.jpg" />
        <meta property="twitter:image" content="./app/src/IMG_0751.jpg" />

        
        {/* Adding JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <body
        className={Family.className}
      >
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
