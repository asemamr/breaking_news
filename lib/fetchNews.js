import sortResultsByImage from "./sortResultsByImage"
export default async function fetchNews(categories, keywords, isDynamic) {
  const query = `query {
    news(input: {categories: "${categories}", keywords: "${keywords}", isDynamic: ${isDynamic}}) {
      results {
        title
        image_url
        description
        source_id
        pubDate
        link
        content
      }
      totalResults
      status
    }
  }`
  
  const data = await fetch(
    process.env.NEXT_PUBLIC_GRAPHQL_URL,
    {
      method: "POST",
      body: JSON.stringify({
        query: query,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 }
    }
  ).then((res) => res.json())
  return sortResultsByImage(data.data.news);
}