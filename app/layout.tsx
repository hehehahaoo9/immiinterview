import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import "./globals.css";

export const metadata: Metadata = {
  title: "入境事務助理員面試練習",
  description: "動機題、情景題與部門知識題練習",
  applicationName: "面試練習",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "面試練習",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#1f4b63",
  icons: {
    icon: [
      { url: "/icon/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <div className="shell">{children}</div>
        <SpeedInsights />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
