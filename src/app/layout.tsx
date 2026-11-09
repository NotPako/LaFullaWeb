import type { Metadata } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "La Fulla",
  description: "Lloc web de La Fulla grup",
  icons: {
    icon: [{ url: "/media/opt/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/media/opt/apple-icon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca">
      <body className={`${geistSans.variable} ${bebasNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
