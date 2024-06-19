import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function NewsImage({ params }) {
  const news = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.id);
  if (!news) return notFound();

  return (
    <Image src={`/images/news/${news.image}`} height={1024} width={1024} />
  );
}
