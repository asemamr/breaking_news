import "./globals.css";
import Header from "./Header";
import Providers from "./Providers";
import Head from "./head";
import { Suspense } from "react";
import Loading from "./loading";



export default async function RootLayout({ children }) {
  return (
    <html>
      <Head />
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Providers>
          <Header />
          <Suspense fallback={<Loading/>}>
          {children}
          </Suspense>
            
        </Providers>
      </body>
    </html>
  );
}
