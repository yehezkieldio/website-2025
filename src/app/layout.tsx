import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata, Viewport } from "next";

import "./globals.css";

import Header from "./header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
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
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
            >
                <ThemeProvider enableSystem={true} attribute="class" storageKey="theme" defaultTheme="system">
                    <div className="flex min-h-screen w-full flex-col">
                        <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
                            <Header />
                            {children}
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
