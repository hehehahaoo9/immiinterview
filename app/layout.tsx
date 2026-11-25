import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
};
