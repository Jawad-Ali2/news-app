import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNews() {
  const news = getLatestNews();

  return <NewsList DUMMY_NEWS={news} />;
}
