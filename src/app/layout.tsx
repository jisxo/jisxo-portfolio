import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { MainAppShell } from "@/components/MainAppShell";
import "./globals.css";
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: "정지서 | Data Engineer & Developer Portfolio",
  description: "데이터 흐름을 설계하는 Data Engineer 정지서. 견고한 Pipeline 구축부터 시스템 Optimization까지, 비효율을 개선하고 안정적인 데이터 환경을 만든 기술 기록을 소개합니다.",
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
