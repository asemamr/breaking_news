"use client"
import { useRouter } from "next/navigation";

function ReadMoreButton({ post }) {

  const router = useRouter();
  function clickHandler() {
    let queryString = Object.entries(post).map(([key, value]) => `${key}=${value}`).join("&")
    router.push(`article?${queryString}`);
  }
  return (
    <button className="bg-orange-400 dark:text-gray-900 font-bold py-1.5 rounded-sm" onClick={clickHandler}>
      Read More
    </button>
  );
}

export default ReadMoreButton;
