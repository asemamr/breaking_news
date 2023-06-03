/* eslint-disable @next/next/no-img-element */
import ReadMoreButton from "./ReadMoreButton";
import Timer from "./Timer";

export default function Post({ post }) {
  return (
    <div>
      <article className="bg-slate-200 dark:bg-slate-800 flex flex-col shadow-sm hover:shadow-lg hover:shadow-slate-300 dark:hover:shadow-slate-700 hover:-translate-y-2 overflow-hidden  transition-all duration-300 ease-in-out  rounded-lg ">
        {post.image_url && (
          <img
            src={post.image_url}
            alt={post.title}
            className="h-56 w-full object-cover rounded-t-lg shadow-md"
          />
        )}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex-1">
            <h2 className="font-bold font-serif">{post.title}</h2>
            <section>
              <p className="text-sm line-clamp-2">{post.description}</p>
            </section>
          </div>
          <footer className="text-gray-400 flex justify-end mt-2">
            <p>{post.source_id}-</p>
            <Timer time={post.pubDate} />
          </footer>
        </div>
        <ReadMoreButton post={post} />
      </article>
    </div>
  );
}
