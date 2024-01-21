import Link from "next/link";
import Heading from "@/components/Heading";

export default function HomePage() {
    return (
        <>
            <Heading>Indie gamer</Heading>
            <p className="pb-3">Best games in the world</p>
            <div className="bg-white border rounded w-80 shadow hover:shadow-xl sm:w-full">
                <Link href="/reviews/hollow-knight/"
                      className="flex flex-col sm:flex-row"
                >
                    <img src="/images/hollow-knight.jpg" alt=""
                         width={320} height={180} className="rounded-t sm:rounded-l sm:rounded-r-none"
                    />
                    <h2 className="font-inter font-semibold py-1 text-center sm:px-2">
                        Hollow Knight
                    </h2>
                </Link>
            </div>
        </>
    );
}