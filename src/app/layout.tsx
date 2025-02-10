import { Geist, Geist_Mono, Manrope } from "next/font/google";

import type { Metadata, Viewport } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import { Navbar } from "#/components/navbar";
import { ScrollToTop } from "#/components/scroll-to-top";
import { cn } from "#/lib/utils";

const display = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    display: "swap",
});

const sans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const mono = Geist_Mono({
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
    description: "Software Engineer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(display.variable, sans.variable, mono.variable, "dark font-sans antialiased")}>
                <div className="relative min-h-screen">
                    <div className="relative flex min-h-screen w-full flex-col">
                        <ScrollToTop />
                        <Navbar />
                        {children}
                        <Analytics />
                        <SpeedInsights />
                    </div>
                </div>
            </body>
        </html>
    );
}
