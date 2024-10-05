import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/organisms/header";

const NunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spartan Disability Alliance",
  description: "A community for SJSU students of all abilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NunitoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
