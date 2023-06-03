import fetchNews from "lib/fetchNews";
import Posts from "./Posts";

import data from "./db.json";

async function Results({ searchParams }) {
  console.log("this is the searchparams terms", searchParams.term);
  // const news = await fetchNews("", searchParams.term, true);
  const news = data.data.news;
  
  return (
    <main className="p-10">
      <Posts posts={news.results} />
    </main>
  );
}

export default Results;
