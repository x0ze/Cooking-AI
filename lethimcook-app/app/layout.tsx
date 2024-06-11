import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./index.css"
import { ThemeProvider } from "@/components/ui/theme-provider"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Let Him Cook",
  description: "Cooking with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
