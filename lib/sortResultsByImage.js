
export default function sortResultsByImage(news) {
  const resultsWithImage = news.results.filter(article => article.image_url !== null)
  const resultsWithoutImage = news.results.filter(article => article.image_url === null)

  return {
    status: news.status,
    totalResults: news.totalResults,
    results: [...resultsWithImage, ...resultsWithoutImage]
  }
}