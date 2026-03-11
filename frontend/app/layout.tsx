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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://asta-property.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "London Property Management | Rental & Landlord Services",
    template: "%s | ASTA Property Management",
  },
  description:
    "Professional London property management services including tenancy management, landlord support, rental listings, and holiday lettings.",
  openGraph: {
    siteName: "ASTA Property Management",
    type: "website",
  },
  robots: { index: true, follow: true },
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
