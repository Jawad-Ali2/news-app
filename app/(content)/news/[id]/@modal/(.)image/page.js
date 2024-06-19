"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedNewsImage({ params }) {
  const router = useRouter();
  const news = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.id);
  if (!news) return notFound();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back}>
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <Image
              src={`/images/news/${news.image}`}
              height={600}
              width={600}
            />
          </div>
        </dialog>
      </div>
    </>
  );
}
