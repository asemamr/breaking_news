import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler} from '@as-integrations/next';
import { gql } from 'graphql-tag';



const books = [{
  title: "poor man and rich man",
  author: "anthony simon"
},
  {
    title: "the holidays",
    author: "asem amr :)"
}]

const typeDefs = gql`
  type Query {
    books: [book]
    news(input: Input): News
  }
  type News {
    status: String!
    totalResults: Int!
    results: [Article!]!
  }
  type Article {
    title: String!
    link: String!
    source_id: String
    keywords: [String]
    creator: [String]
    image_url: String
    video_url: String
    description: String
    pubDate: String!
    content: String
    country: [String]
    category: [String]
    language: String
  }
  type book {
    title: String!
    author: String!
  }
  input Input {
    categories: String
    isDynamic: Boolean
    keywords: String
  }
`
const resolvers = {
  Query: {
    books: () => books,
    news: async (parent, {input: {categories, isDynamic, keywords}}, context) => {
      if (keywords) {
        keywords = keywords.replace(" ", "%20")
      }
      const url = `https://newsdata.io/api/1/news?apikey=pub_191557d28c2be3ed6d194155d9a6af8580164${categories ? `&category=${categories}` : ""}${keywords ? `&q=${keywords}` : ""}`;

      const news = await fetch(url, {
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? {revalidate: 0} : {revalidate: 20}
      }
      )
      const res = await news.json();
      return res
    }
  }
}

const server = new ApolloServer({
  resolvers,
  typeDefs
})

export default startServerAndCreateNextHandler(server);