import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetail({ params }) {
  console.log(params.id);
  const news = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.id);

  if (!news) return notFound();
  return (
    <article>
      <header>
        <Link href={`/news/${news.slug}/image`}>
          <Image
            src={`/images/news/${news.image}`}
            alt={news.title}
            height={500}
            width={500}
          />
        </Link>
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
