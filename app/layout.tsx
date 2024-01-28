import type { ReactNode } from "react";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import { inter, manrope } from "./fonts";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-blue-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>

        <main className="grow py-3">{children}</main>

        <footer className="border-t py-3 text-center text-blue-900 text-xs">
          <p>
            Game data and images from{" "}
            <a
              href="https://rawg.io"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              RAWG
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
