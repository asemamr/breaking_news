import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 items-center p-10 justify-center">
        <Bars3Icon className="w-14"></Bars3Icon>
        <Link href="/about" prefetch={false}>
          <h1 className="text-center font-serif text-4xl">The <span className="underline decoration-6 decoration-orange-400">ASEM</span> News</h1>
        </Link>
        
        <div className="flex items-center justify-end">
          <DarkModeButton/>
          <button className="hidden md:inline myButton">
            Subscribe Now
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBox/>
    </header>
  );
}
