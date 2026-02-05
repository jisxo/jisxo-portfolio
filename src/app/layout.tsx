import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { MainAppShell } from "@/components/MainAppShell";
import { GoogleAnalytics } from '@next/third-parties/google';
import { siteConfig } from '@/data/site';
import "./globals.css";
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: "데이터의 흐름을 설계하고 가치를 만드는 Data Engineer 정지서입니다.",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio Thumbnail`,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: "데이터의 흐름을 설계하고 가치를 만드는 Data Engineer 정지서입니다.",
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          <MainAppShell>{children}</MainAppShell>
        </MantineProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": siteConfig.name.split('|')[0].trim(),
              "alternateName": "정지서",
              "jobTitle": siteConfig.role,
              "url": siteConfig.url,
              "sameAs": [
                siteConfig.github,
                siteConfig.url
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "CSLEE"
              },
              "description": siteConfig.description
            })
          }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
