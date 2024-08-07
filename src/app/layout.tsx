import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audio-Next",
  description: "This app is a comprehensive music education platform designed to offer a wide range of courses and webinars to music enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
        <div className="flex justify-center items-center relative w-full ">
           <Navbar className="top-7 md:top-10 left-0 absolute"/>
        </div>
        {children}
        </AuthProvider>
        </body>
    </html>
  );
}
