import fetchNews from "lib/fetchNews";
import Posts from "./Posts";

async function Results({ searchParams }) {
  const news = await fetchNews("", searchParams.term, true);
  return (
    <main className="p-10">
      <Posts posts={news.results} />
    </main>
  );
}

export default Results;
