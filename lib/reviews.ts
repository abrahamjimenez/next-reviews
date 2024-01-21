import {readFile, readdir} from "node:fs/promises";
import matter from "gray-matter";
import {marked} from "marked";

export interface Review {
    title: string;
    date: string;
    image: string;
    body: string;
    slug: string;
}

export async function getReview(slug: string): Promise<Review> {
    const text = await readFile(`./content/reviews/${slug}.md`, "utf8");
    const {content, data: {title, date, image}} = matter(text);
    const body = await marked(content);

    return {slug, title, date, image, body};
}

export async function getReviews(): Promise<Review[]> {
    const slugs = await getSlugs()

    const reviews = [];
    for (const slug of slugs) {
        const review: Review = await getReview(slug);
        reviews.push(review);
    }

    return reviews;
}

export async function getSlugs() : Promise<string[]> {
    const files = await readdir("./content/reviews");
    return files.filter((file) => file.endsWith(".md"))
        .map((file) => file.slice(0, -".md".length));
}