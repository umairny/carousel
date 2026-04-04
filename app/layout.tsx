import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carousel UI Components",
  description: "A premium collection of modern React carousel components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300 selection:bg-blue-500/30 overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ambient background glows */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-blue-400/20 dark:bg-blue-900/15 blur-[120px]" />
            <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vh] rounded-full bg-indigo-300/20 dark:bg-indigo-900/10 blur-[120px]" />
          </div>
          <Navbar />
          <div className="flex-1 w-full relative">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
