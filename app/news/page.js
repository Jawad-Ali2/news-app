import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function News() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList DUMMY_NEWS={DUMMY_NEWS} />
    </>
  );
}
