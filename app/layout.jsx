import { Analytics } from "@vercel/analytics/react";
import { Bebas_Neue, Crimson_Text, Montserrat } from "next/font/google";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PageTransitions from "../components/PageTransitions";
import { site } from "../content/global";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL(site.metadata.openGraph.url),
  title: site.metadata.title,
  description: site.metadata.description,
  openGraph: site.metadata.openGraph,
  twitter: site.metadata.twitter,
};

export default function RootLayout({ children }) {
  const fontVars = `${bebasNeue.variable} ${crimsonText.variable} ${montserrat.variable}`;

  return (
    <html lang="en-US" className={fontVars}>
      <body className={`${crimsonText.className} min-h-screen bg-brand-dark antialiased`}>
        <Nav />
        <PageTransitions>{children}</PageTransitions>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
