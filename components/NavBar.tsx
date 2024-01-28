import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2 ">
        <li>
          <Link
            href="/"
            className="font-inter font-bold text-blue-800 hover:underline"
          >
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            href="/about/"
            prefetch={false}
            className="text-blue-800 hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link href="/reviews/" className="text-blue-800 hover:underline">
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
}
