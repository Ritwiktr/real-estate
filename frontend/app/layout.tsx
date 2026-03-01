import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Residence | Find Your Next Home",
  description: "Explore exclusive properties. Premium rentals and holiday lettings with a seamless, personalized experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
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
