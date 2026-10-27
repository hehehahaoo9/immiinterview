import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "入境事務助理員面試練習",
  description: "動機題、情景題與部門知識題練習",
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
      </body>
    </html>
  );
}
