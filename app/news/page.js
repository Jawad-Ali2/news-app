import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

export default function News() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <Image
                src={`/images/news/${news.image}`}
                width={1024}
                height={1024}
                alt={news.title}
              />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
