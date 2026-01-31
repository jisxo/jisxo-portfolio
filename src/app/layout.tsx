import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { MainAppShell } from "@/components/MainAppShell";
import "./globals.css";
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://jisxo-portfolio.netlify.app"),
  title: "정지서 | Data Engineer & Developer Portfolio",
  description: "데이터 흐름을 설계하는 Data Engineer 정지서. 견고한 Pipeline 구축부터 시스템 Optimization까지, 비효율을 개선하고 안정적인 데이터 환경을 만든 기술 기록을 소개합니다.",
  openGraph: {
    title: "정지서 | Data Engineer Portfolio",
    description: "데이터의 흐름을 설계하고 가치를 만드는 Data Engineer 정지서입니다.",
    url: "https://jisxo-portfolio.netlify.app", // Assuming Netlify URL based on previous context, or use site URL if known. Actually better to omit domain if not sure, but for OG image to work usually absolute URL is preferred or relative is handled by next. Let's use relative for image but full URL is better. Let's assume production URL is needed. For now Next.js handles relative paths in metadataBase. I will add metadataBase later if needed, but for now relative path works if metadataBase is set. I'll stick to basic relative path for image.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Data Engineer Jiseo Jeong Portfolio Thumbnail",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "정지서 | Data Engineer Portfolio",
    description: "데이터의 흐름을 설계하고 가치를 만드는 Data Engineer 정지서입니다.",
    images: ["/og-image.jpg"],
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
      </body>
    </html>
  );
}
