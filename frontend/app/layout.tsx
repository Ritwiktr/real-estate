import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import MainWithHomeLayout from "@/components/MainWithHomeLayout";
import LayoutWithConditionalFooter from "@/components/LayoutWithConditionalFooter";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASTA Property Management | Find Your Next Home",
  description: "ASTA Property Management – Explore exclusive properties. Premium rentals and holiday lettings with a seamless, personalized experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${montserrat.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <AuthProvider>
          <Header />
          <LayoutWithConditionalFooter>
            <MainWithHomeLayout>{children}</MainWithHomeLayout>
          </LayoutWithConditionalFooter>
        </AuthProvider>
      </body>
    </html>
  );
}
