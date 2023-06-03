import Posts from "@/app/Posts";
import fetchNews from "lib/fetchNews";
import LINKS from "../../../../constants";
import data from "../../db.json"
import AnimateProviders from "./AnimateProviders";

async function page({params:{category}}) {
  // const news = await fetchNews(category, null, false)
  
  const news = data.data.news
  return (
      <main className="p-10">
        <Posts posts={news.results} />
      </main>
  );
}

export default page;

export async function generateStaticParams() {
  return LINKS.map((link) => ({
    category: link,
  }))
}