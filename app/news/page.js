import Link from "next/link";

export default function News() {
  return (
    <>
      <h1>News Page</h1>
      <Link href="/news/1">News 1</Link>
      <Link href="/news/2">News 2</Link>
      <Link href="/news/3">News 3</Link>
    </>
  );
}
