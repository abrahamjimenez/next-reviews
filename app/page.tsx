import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";

export default async function HomePage() {
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Indie gamer</Heading>
      <p className="pb-3">Best games in the world</p>
      <div className="bg-white border rounded w-80 shadow hover:shadow-xl sm:w-full">
        <Link
          href={`/reviews/${review.slug}/`}
          className="flex flex-col sm:flex-row"
        >
          <Image
            src={review.image}
            alt=""
            width={320}
            height={180}
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-inter font-semibold py-1 text-center sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
