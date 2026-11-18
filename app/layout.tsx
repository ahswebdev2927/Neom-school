// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/Components/layout/Header";
import Footer from "@/Components/layout/Footer";
import FloatingWhatsApp from "@/Components/layout/FloatingButtons";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neomeducationhyd.com"),
  title: {
    default: "Best School in Santosh Nagar | NEOM School – Future-Ready Cambridge Learning",
    template: "%s | NEOM School",
  },
  description:
    "Searching for the best school in Santosh Nagar? NEOM School offers Cambridge-standard education from Playgroup to Grade 7 with caring teachers, safe campus, and individual attention. Admissions open!",
  keywords: [
    "Best school in Santosh Nagar",
    "Best Cambridge International school near me",
    "Schools with strong academics",
    "Future-ready schools",
    "Schools with caring teachers",
    "Individual attention school",
    "Safe learning environment",
    "NEOM School Hyderabad",
  ],
  verification: {
    google: "lC0YcOepCwnhfLh3sbr78WEDg03y_Z26H5Ul1scY7K4",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/favicon.ico", sizes: "180x180" },
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunitoSans.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G1ZEMP3LG1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G1ZEMP3LG1');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}