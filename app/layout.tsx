import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mohamed Ibrahim | Data Engineering Portfolio",
    template: "%s | Mohamed Ibrahim",
  },
  description:
    "Data engineering portfolio of Mohamed Ibrahim — Python, SQL, ETL, APIs, analytics systems, and AI-powered data projects.",
  keywords: [
    "Mohamed Ibrahim",
    "Data Engineering",
    "Data Engineer",
    "Python",
    "SQL",
    "ETL",
    "PostgreSQL",
    "MySQL",
    "Pandas",
    "Analytics",
    "MIS",
    "San Jose",
  ],
  authors: [{ name: "Mohamed Ibrahim" }],
  creator: "Mohamed Ibrahim",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Mohamed Ibrahim | Data Engineering Portfolio",
    description:
      "Python, SQL, ETL, APIs, analytics systems, and AI-powered data projects.",
    siteName: "mohamed.dev",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohamed Ibrahim — Data Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ibrahim | Data Engineering Portfolio",
    description:
      "Python, SQL, ETL, APIs, analytics systems, and AI-powered data projects.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
