import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata, Viewport } from "next";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export const metadata: Metadata = {
    title: "Yehezkiel Dio Sinolungan",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} dark font-sans antialiased`}>{children}</body>
        </html>
    );
}
