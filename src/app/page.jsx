
import data from "./db.json";
import LINKS from "../../constants";
import fetchNews from "../../lib/fetchNews";
import Posts from "./Posts";
import Loading from "./loading";
import { Suspense } from "react";


export default async function Home() {
  LINKS.splice(5, 2);

  const news = await fetchNews("top,sports,technology", null, false)
  // const news = data.data.news;
  return (
    <main className="p-10">
      <Posts posts={news.results} />
    </main>
  );
}
