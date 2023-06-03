"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function submitHandler(e) {
    e.preventDefault();
    router.push(`/search?term=${input}`);
  } 

return (
    <form className="flex justify-between max-w-7xl rounded-sm px-4 mx-auto gap-4 md:gap-8" onSubmit={submitHandler}>
      <input
        type="text"
        className="flex-1 outline-none h-14 bg-transparent placeholder-gray-400 text-gray-300 dark:text-orange-400 border rounded-md px-4"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="submit" className="dark:text-orange-400 disabled:text-gray-200" disabled={!input}>
        Search
      </button>
    </form>
  );
}
