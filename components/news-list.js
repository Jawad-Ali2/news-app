import Image from "next/image";
import Link from "next/link";
import React from "react";

function NewsList({ DUMMY_NEWS }) {
  return (
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
  );
}

export default NewsList;
