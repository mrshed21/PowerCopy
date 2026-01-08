import React from "react";
import NewsCard from "./NewsCard";
import { news } from "@/data/news";

export default function NewsCards() {
  return (
    <div className="py-8 ">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Nyheter
      </h2>
      <div className="flex  justify-center gap-4 py-4 overflow-x-auto">
        {news.map((newItem) => (
          <NewsCard
            key={newItem.id}
            image={newItem.image}
            title={newItem.title}
            discriptions={newItem.discriptions}
            slug={newItem.slug}
            id={newItem.id}
          />
        ))}
      </div>
    </div>
  );
}

