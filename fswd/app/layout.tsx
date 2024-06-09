import "./globals.css";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Azayd IT Consulting Services",
  description: "Elevate Your IT with Our Consultancy Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} relative`}>
        {children}
        <Analytics /> {/* Using Vercel Ananlytics */}
      </body>
    </html>
  );
}
