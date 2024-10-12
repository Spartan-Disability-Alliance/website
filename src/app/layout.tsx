import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/organisms/header";
import Footer from "./components/organisms/footer";

const NunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Spartan Disability Alliance",
    default: "Spartan Disability Alliance",
    absolute: "Spartan Disability Alliance",
  },
  description: "A community for SJSU students of all abilities.",
  keywords: ["sjsu", "student", "spartan", "accessibility", "alliance"],
  openGraph: {
    url: "https://spartandisabilityalliance.netlify.app",
    locale: "en_US",
    type: "website",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NunitoSans.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
