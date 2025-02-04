import { Manrope, Space_Mono } from "next/font/google";

import type { Metadata, Viewport } from "next";

import "./globals.css";

const geistSans = Manrope({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Space_Mono({
    weight: ["400", "700"],
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
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
