import {ReactNode} from "react";
import Link from "next/link"

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({children}: LayoutProps) {
    return (
        <html lang="en">
        <body>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about/" prefetch={false}>About</Link>
                    </li>
                    <li>
                        <Link href="/reviews/">Reviews</Link>
                    </li>
                </ul>
            </nav>
        </header>

        <main>
            {children}
        </main>

        <footer>
            <p>Game data and images from <a href="https://rawg.io" target="_blank">RAWG</a></p>
        </footer>
        </body>
        </html>
    );
}