import type {ReactNode} from "react";
import NavBar from "../components/NavBar";
import "./globals.css";

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({children}: LayoutProps) {
    return (
        <html lang="en">
        <body className="bg-blue-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
            <NavBar/>
        </header>

        <main className="grow py-3">
            {children}
        </main>

        <footer className="border-t py-3 text-center text-xs">
            <p>Game data and images from {" "}
                <a href="https://rawg.io" target="_blank"
                   className="text-blue-800 hover:underline">
                    RAWG
                </a></p>
        </footer>
        </body>
        </html>
    );
}