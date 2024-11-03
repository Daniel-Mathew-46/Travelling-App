import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel App",
  description: "Travel UI/UX App for camping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className=" relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
