import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://propertysure.in'),
  title: {
    default: "Property Sure | Buy, Sell Properties & Home Loan Assistance in Delhi NCR",
    template: "%s | Property Sure"
  },
  description: "Property Sure is Delhi NCR's trusted real estate & home loan consultancy. Buy, sell, or rent verified residential flats, luxury villas, commercial spaces, and get instant low-ROI bank loan approval.",
  keywords: [
    "Property Sure",
    "Real Estate Delhi NCR",
    "Buy Flat Noida",
    "Sell Property Noida",
    "Home Loan Consultancy",
    "SBI Home Loan Agent",
    "Luxury Apartments Gurgaon",
    "Property Broker Near Me"
  ],
  authors: [{ name: "Property Sure Team" }],
  creator: "Property Sure",
  publisher: "Property Sure Real Estate Consultancy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Property Sure | Buy, Sell Properties & Home Loan Support",
    description: "Verified real estate listings, expert property buying/selling guidance, and seamless home loan assistance across Noida, Delhi NCR & Gurgaon.",
    url: 'https://propertysure.in',
    siteName: 'Property Sure',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Property Sure | Premium Real Estate & Home Loan Experts",
    description: "Verified real estate listings & quick bank home loan approval in Noida & Delhi NCR.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
