import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rabha Massage Therapy - Professional Massage Services in Casablanca",
  description: "Experience professional massage therapy with Rabha in Casablanca. Offering Swedish, deep tissue, relaxation, sports massage and more. Book your wellness session today.",
  keywords: "massage therapy, Casablanca, wellness, relaxation, deep tissue massage, Swedish massage, sports massage, therapeutic massage",
  authors: [{ name: "Rabha Massage Therapy" }],
  creator: "Rabha Massage Therapy",
  publisher: "Rabha Massage Therapy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rabha Massage Therapy - Professional Massage Services in Casablanca",
    description: "Experience professional massage therapy with Rabha in Casablanca. Offering comprehensive wellness services for your health and relaxation.",
    url: "https://rabhamassage.com",
    siteName: "Rabha Massage Therapy",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}