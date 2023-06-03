"use client";
import { notFound } from "next/navigation";
import Post from "../Post";
import Timer from "../Timer";
import { useSearchParams } from 'next/navigation';


function Page() {
  
  const params = useSearchParams();
  console.log("the search params using the useSearchParams", );
  if (!params || !params.has("description")) {
    return <div className="font-bold text-center text-3xl mt-10 font-serif capitalize">this page is not found</div>
  }
  const content = params.get("content");
  const maxSentencesPerParagraph = 3; // Change this as needed
  const sentences = content.split(/\.|\?|!/); // Split into an array of sentences
  const paragraphs = [];

  for (let i = 0; i < sentences.length; i += maxSentencesPerParagraph) {
    // Group sentences into paragraphs
    const paragraph = sentences.slice(i, i + maxSentencesPerParagraph).join('. ');
    paragraphs.push(paragraph);
  }
    
  return (
    <article className="p-10">
      <section className="flex flex-col lg:flex-row lg:space-x-10 md:px-10 lg:px-20">
      {params.get("image_url") && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={params.get("image_url")}
          alt={params.get("title")}
          className="h-56 md:h-72 max-w-md md:max-w-lg lg:max-w-xl object-contain mx-auto rounded-lg shadow-md"
        />
        )}
        <div>
          <h1 className="font-bold text-4xl font-serif capitalize mt-6 decoration-orange-400 transition-all hover:underline decoration-2 active:underline underline-offset-4">{params.get("title")}</h1>
          <div className="flex divide-x-2 space-x-4 py-8">
          {<h2 className="font-bold">By: { params.get("creator") === "null" ? "unknown": params.get("creator") }</h2>}
            <a className="font-bold pl-4 hover:underline" href={params.get("link")}>source: { params.get("source_id").source_id}</a>
            <h2 className="pl-4"><Timer time={params.get("pubDate")} /></h2>
          </div>
          <div>
            <div className="text-justify text-lg leading-7 ">{paragraphs.map((para) => <div key={para}><p >{ para }.</p><br/></div>)}</div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Page;