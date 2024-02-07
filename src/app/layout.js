import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import { cx } from "@/src/utils";
import Header from '@/src/components/Header';
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  title: 'Cdemy',
  description: 'Software Development Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-gradient-to-r from-green-100 to-blue-100 "
        )}
      >
       <Header/> {children}</body>
    </html>
  )
}
